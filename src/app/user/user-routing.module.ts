import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../common/auth-guard.service';

// import { UserComponent } from './user.component';
import { PermissionComponent } from './permission.component'

const userRoutes:Routes=[
    {
        path:'permission',
        component:PermissionComponent,
    }
];

@NgModule({
    imports:[RouterModule.forChild(userRoutes)],
    exports:[RouterModule]
})

export class UserRoutingModule{}