import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../common/auth-guard.service';

import { IndexComponent } from './index.component';

const indexRoutes:Routes=[
    {
        path:'index',
        component:IndexComponent,
        canActivate:[AuthGuard],
    },
];

@NgModule({
    imports:[RouterModule.forChild(indexRoutes)],
    exports:[RouterModule]
})

export class IndexRoutingModule{}