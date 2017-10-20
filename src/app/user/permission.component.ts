import { Component,ViewChild,Injectable  } from '@angular/core';
import { TreeviewItem, TreeviewConfig,DownlineTreeviewItem,TreeviewHelper,TreeviewComponent,TreeviewEventParser,OrderDownlineTreeviewEventParser } from 'ngx-treeview';
import * as _ from 'lodash';
import 'rxjs/add/operator/toPromise';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { UserService } from './user.service';

@Injectable()
export class ProductTreeviewConfig extends TreeviewConfig {
    hasAllCheckBox = true;
    hasFilter = true;
    hasCollapseExpand = true;
    maxHeight = 600;
}

@Component({
    templateUrl:'./permission.component.html',
    providers: [
        { provide: TreeviewEventParser, useClass: OrderDownlineTreeviewEventParser },
        { provide: TreeviewConfig, useClass: ProductTreeviewConfig },
        UserService
    ],
})

export class PermissionComponent{
    items:TreeviewItem[]=[];
    rows:string[];
    permission={};
    permissionMap={};
    @ViewChild(TreeviewComponent) treeviewComponent: TreeviewComponent;

    constructor(private userService:UserService,private modalService:NgbModal){
        this.getPermissionTreeNodes();
    }

    onSelectedChange(downlineItems: DownlineTreeviewItem[]) {
        this.rows = [];
        downlineItems.forEach(downlineItem => {
            const item = downlineItem.item;
            const value = item.value;
            const texts = [item.text];
            let parent = downlineItem.parent;
            while (!_.isNil(parent)) {
                texts.push(parent.item.text);
                parent = parent.parent;
            }
            const reverseTexts = _.reverse(texts);
            const row = `${reverseTexts.join(' -> ')} : ${value}`;
            this.rows.push(row);
        });
    }
    removeItem(item: TreeviewItem) {
        let removeFlag=false;
        if(item.children&&item.children.length>0){
            removeFlag=confirm("删除节点，会删除它的所有子节点，确定要删除吗？");
        }else{
            removeFlag=confirm("确定要删除此节点吗？");
        }
        if(removeFlag){
            //数据库移除
            this.userService.deletePermissions(item.value);
            //页面结构移除
            let isRemoved = false;
            for (const tmpItem of this.items) {
                if (tmpItem === item) {
                    _.remove(this.items, item);
                } else {
                    isRemoved = TreeviewHelper.removeItem(tmpItem, item);
                    if (isRemoved) {
                        break;
                    }
                }
            }

            if (isRemoved) {
                this.treeviewComponent.raiseSelectedChange();
            }
        }    
    }

    addItem(item: TreeviewItem,modalId) {
        this.openModal(item,modalId,false);
    }

    editItem(item: TreeviewItem,modalId) {
        this.openModal(item,modalId,true);
    }
    
    //获取所有treeview所需权限node
    getPermissionTreeNodes(){
        this.userService.getPermissions().then(permissions=>{
            let nodeMap:{[key:number]:any}={};
            permissions.forEach(permission => {
                if(permission['parentId']>=0){
                    if(!(permission['parentId'] in nodeMap)){
                        nodeMap[permission['parentId']]=[];
                    }
                    nodeMap[permission['parentId']].push(permission);
                }
                this.permissionMap[permission['permissionId']]=Object.assign({},permission);
            });
            let itemList=nodeMap[0];
            this.getItemNode(nodeMap[0],nodeMap);
            // let permissionItemList=[];
            // itemList.forEach(item => {
            //     permissionItemList.push(new TreeviewItem(item));
            // });
            //this.items=permissionItemList;
            this.items=[new TreeviewItem({"text":"root","value":"0","children":nodeMap[0],"collapsed":true})];
        });
    }

    getItemNode(nodeList,nodeMap){
        while(nodeList&&nodeList.length>0){
            nodeList.forEach(node => {
                let nodeId=node['permissionId'];
                node['text']=node['permissionName'];
                node['value']=nodeId;
                node['disabled']=!node['permissionState'];
                if(nodeId in nodeMap){
                    node['children']=nodeMap[nodeId];
                    node['collapsed']=true;
                    this.getItemNode(nodeMap[nodeId],nodeMap);
                }
            });
            nodeList=undefined;
        }
    }

    openModal(item: TreeviewItem,modalId,edit:boolean) {
        if(edit){
            this.permission=this.permissionMap[item.value];
        }else{
            this.permission={};
        }
        this.modalService.open(modalId).result.then((result) => {
            debugger
            if(typeof(result)=="object"&&result['permissionName']&&result['permissionCode']){
                debugger
                if(edit){
                    this.userService.updatePermissions(result).then(data=>{
                        if(data&&data['permissionId']){
                            item.text=data['permissionName'];
                            item.disabled=!data['permissionState'];                            
                        }
                    });
                }else{
                    result['parentId']=item.value;
                    this.userService.addPermissions(result).then(data=>{
                        if(data&&data['permissionId']){
                            this.permissionMap[data['permissionId']]=data;
                            let a:TreeviewItem=new TreeviewItem({text:data["permissionName"],value:data["permissionId"],disabled:!data['permissionState']});
                            if(!item['children']){
                                item['children']=[a];
                            }else{
                                item['children'].push(a);
                            }                          
                        }else{
                            alert('保存权限失败');
                            console.error(`保存权限失败:${data}`);
                        }
                    });
                }             
            }else{
                console.info(result);
            }
            
        }, (reason) => {
            console.info(reason);
        });
    }

}