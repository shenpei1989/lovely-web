import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreeviewModule } from 'ngx-treeview';

import { PermissionComponent } from './permission.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        NgbModule,
        TreeviewModule,
        UserRoutingModule
    ],
    declarations:[
        PermissionComponent
    ],

})

export class UserModule{}