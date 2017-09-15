import { Component } from '@angular/core';

@Component({
    templateUrl:'./register.component.html'
})

export class RegisterComponent{
    user:any={};
    loading=false;

    register():void{
        console.log('register:'+this.user);
        this.loading=true;
    }
}