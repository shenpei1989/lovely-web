import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
    isLoggedIn=true;

    redirectUrl:string;

    login(){
        this.isLoggedIn=true;
    }

    logout():void{
        this.isLoggedIn=false;
    }
}