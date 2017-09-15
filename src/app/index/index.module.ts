import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        IndexRoutingModule,
        NgbModule
    ],
    declarations:[
        IndexComponent
    ]
})

export class IndexModule{}