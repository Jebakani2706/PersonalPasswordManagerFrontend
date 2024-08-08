import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordDetailViewComponent } from './Components/password-detail-view/password-detail-view.component';
import {  PasswordManagerSummaryComponent} from "./Components/password-manager-summary/password-manager-summary.component";
import {  AddPasswordComponent} from "./Components/add-password/add-password.component"
const routes: Routes = [
  { path: '', redirectTo: '/passwords', pathMatch: 'full' },
  { path: 'passwords', component: PasswordManagerSummaryComponent },
  { path: 'passwords/password-detail/:id', component: PasswordDetailViewComponent },
  { path: 'passwords/add-password', component: AddPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
