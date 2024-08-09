import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  PasswordManagerSummaryComponent} from "./Components/password-manager-summary/password-manager-summary.component";
const routes: Routes = [
  { path: '', redirectTo: '/passwords', pathMatch: 'full' },
  { path: 'passwords', component: PasswordManagerSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
