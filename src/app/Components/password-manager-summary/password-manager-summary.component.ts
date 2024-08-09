import { Component, OnInit } from '@angular/core';
import { PasswordManagerServiceService } from '../../Service/password-manager-service.service'
import { AddPasswordComponent } from '../add-password/add-password.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-password-manager-summary',
  templateUrl: './password-manager-summary.component.html',
  styleUrls: ['./password-manager-summary.component.scss']
})
export class PasswordManagerSummaryComponent implements OnInit {

  passwordList: any = [];
  PasswordDetails = null;

  constructor(public passwordService: PasswordManagerServiceService, private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.GetAllPassword();
  }

  GetAllPassword() {
    var data = this.passwordService.Get('GetAllPassword').subscribe(res => {
      if (res.statusCode == 'SUCCESS') {
        this.passwordList = res.data;
      }
    }
    );
  }

  DeletePassword(id:any) {
    this.passwordService.Delete("DeletePassword?id=" + id).subscribe(res => {
      if (res.statusCode == 'SUCCESS') {
        this.GetAllPassword();
      }
    }
    )
  }

  GetPasswordDetailById(passwordManagerId: any) {
    this.passwordService.Get("GetPasswordById?id=" + passwordManagerId + "&decrypt=" + true).subscribe(res => {
      if (res.statusCode == 'SUCCESS') {
        this.PasswordDetails = res.data;
        this.openModal(this.PasswordDetails)
      }
    }
    )
  }


  setPasswordDetails(pwd: any) {
    if (pwd != null) {
      pwd = this.GetPasswordDetailById(pwd.passwordManagerId);
    }
    else
    {
      this.openModal(pwd)
    }
  }

  openModal(pwd: any) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };
    const modalRef = this.modalService.open(AddPasswordComponent, ngbModalOptions);
    modalRef.componentInstance.PasswordDetails = pwd;
  }


}
