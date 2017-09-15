import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../common/auth.service'

@Component({
    templateUrl:'./login.component.html',
})

export class LoginComponent{
    user:any={};

    constructor(public authService:AuthService,public router:Router){}

    login():void{
        console.log('login:'+this.user);
        this.authService.login();
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/index';
        this.router.navigate([redirect]);
    }
}