import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

const serverUrl="http://localhost:9195/api/";

@Injectable()
export class UserService{
    //---------------------------------------------------------权限--------------------------------
    constructor(private http:Http){}
    //获取所有用户权限
    getPermissions(){
        return this.http.get(serverUrl+'permission')
        .toPromise()
        .then(response=>response.json())
        .catch(this.handleError);
    }

    //新增用户权限
    addPermissions(obj){
        return this.http.post(serverUrl+'permission/add',obj)
        .toPromise()
        .then(response=>response.json())
        .catch(this.handleError);
    }

    //新增用户权限
    updatePermissions(obj){
        return this.http.post(serverUrl+'permission/edit/'+obj['id'],obj)
        .toPromise()
        .then(response=>response.json())
        .catch(this.handleError);
    }
    
    //删除用户权限
    deletePermissions(id){
        return this.http.delete(serverUrl+'permission/delete/'+id)
        .toPromise()
        .then(response=>console.log(response))
        .catch(this.handleError);
    }
    //---------------------------------------------------------角色--------------------------------
    //获取所有用户权限
    getRoles(){
        return this.http.get(serverUrl+'role')
        .toPromise()
        .then(response=>response.json())
        .catch(this.handleError);
    }

    //新增用户权限
    addRoles(obj){
        return this.http.post(serverUrl+'role/add',obj)
        .toPromise()
        .then(response=>response.json())
        .catch(this.handleError);
    }

    //新增用户权限
    updateRoles(obj){
        return this.http.post(serverUrl+'role/edit/'+obj['id'],obj)
        .toPromise()
        .then(response=>response.json())
        .catch(this.handleError);
    }
    
    //删除用户权限
    deleteRole(id){
        return this.http.delete(serverUrl+'role/delete/'+id)
        .toPromise()
        .then(response=>console.log(response))
        .catch(this.handleError);
    }
    

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}