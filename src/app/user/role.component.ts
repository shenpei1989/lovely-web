import { Component,ViewChild,Injectable  } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { UserService } from './user.service';


@Component({
    templateUrl:'./role.component.html',
    providers: [
        UserService
    ],
})

export class RoleComponent{

    constructor(private userService:UserService){
    }
}