import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

const adminRoutes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
];

@NgModule({
    imports:[RouterModule.forChild(adminRoutes)],
    exports:[RouterModule]
})

export class AdminRoutingModule{}