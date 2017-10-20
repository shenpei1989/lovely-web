import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../common/auth-guard.service';

import { IndexComponent } from './index.component';
import { PermissionComponent } from '../user/permission.component';
import { RoleComponent } from '../user/role.component';
import { UserComponent } from '../user/user.component';

const indexRoutes:Routes=[
    {
        path:'index',
        component:IndexComponent,
        canActivate:[AuthGuard],
        children:[{
            path:'permission',
            component:PermissionComponent
        },{
            path:'role',
            component:RoleComponent
        },{
            path:'user',
            component:UserComponent
        }]
    }
];

@NgModule({
    imports:[RouterModule.forChild(indexRoutes)],
    exports:[RouterModule]
})

export class IndexRoutingModule{}