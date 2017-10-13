import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService{
    private permissionUrl='http://localhost:9195/api/permission';
    constructor(private http:Http){}
    //获取所有用户权限
    getPermissions(){
        return this.http.get(this.permissionUrl)
        .toPromise()
        .then(response=>response.json())
        .catch(this.handleError);
    }

    //新增用户权限
    addPermissions(obj){
        return this.http.post(this.permissionUrl+'/add',obj)
        .toPromise()
        .then(response=>response.json())
        .catch(this.handleError);
    }

    //新增用户权限
    updatePermissions(obj){
        return this.http.post(this.permissionUrl+'/edit/'+obj['id'],obj)
        .toPromise()
        .then(response=>response.json())
        .catch(this.handleError);
    }
    
    //删除用户权限
    deletePermissions(id){
        return this.http.delete(this.permissionUrl+'/delete/'+id)
        .toPromise()
        .then(response=>console.log(response))
        .catch(this.handleError);
    }

    

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}