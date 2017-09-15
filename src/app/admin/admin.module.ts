import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'; 

import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        AdminRoutingModule
    ],
    declarations:[
        RegisterComponent,
        LoginComponent
    ]
})

export class AdminModule{}