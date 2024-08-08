import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordManagerSummaryComponent } from './Components/password-manager-summary/password-manager-summary.component';
import { PasswordDetailViewComponent } from './Components/password-detail-view/password-detail-view.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddPasswordComponent } from './Components/add-password/add-password.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    PasswordManagerSummaryComponent,
    PasswordDetailViewComponent,
    AddPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
