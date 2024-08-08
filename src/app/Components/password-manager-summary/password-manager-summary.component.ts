import { Component } from '@angular/core';

@Component({
  selector: 'app-password-manager-summary',
  templateUrl: './password-manager-summary.component.html',
  styleUrls: ['./password-manager-summary.component.scss']
})
export class PasswordManagerSummaryComponent {

  displayedColumns: string[] = ['category', 'app', 'userName', 'password','action'];
  dataSource :any = [];
}
