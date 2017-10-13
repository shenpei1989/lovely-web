import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TreeviewModule } from 'ngx-treeview';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { IndexModule } from './index/index.module';
import { UserModule } from './user/user.module';

import { AuthService } from './common/auth.service';
import { AuthGuard } from './common/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    TreeviewModule.forRoot(),
    AdminModule,
    IndexModule,
    UserModule,
    AppRoutingModule,
  ],
  providers:[
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
