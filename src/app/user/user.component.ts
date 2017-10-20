import { Component,ViewChild,Injectable  } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { UserService } from './user.service';


@Component({
    templateUrl:'./user.component.html',
    providers: [
        UserService
    ],
})

export class UserComponent{

    constructor(private userService:UserService){
    }
}