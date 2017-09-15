import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService:AuthService,private router:Router){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        console.log('AuthGuard#/login');
        let url:string=state.url;
        return this.checkLogin(url);
        
    }

    checkLogin(url:string):boolean{
        if(this.authService.isLoggedIn){ return true; }

        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }
}