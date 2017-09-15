import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './admin/login.component';
import { RegisterComponent } from './admin/register.component';

const appRoutes:Routes=[
    {path:'',redirectTo:'index',pathMatch:'full'},
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}