import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { PasswordManagerServiceService } from 'src/app/Service/password-manager-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.scss']
})
export class AddPasswordComponent implements OnInit {
  passwordForm: UntypedFormGroup;
  FormTitle: any = 'Create Password Manager';
  hide:any=true;
  @Output() closeModal = new EventEmitter<void>();
  @Input('PasswordDetails') set PasswordDetails(event: any) {
    this.CreateForm();
    if (event != null  && event?.passwordManagerId != 0) {
      this.FormTitle = 'Update Password Manager';
      this.patchFormData(event);
    }
  };

  constructor(private fb: FormBuilder, private activeModal: NgbActiveModal, public passwordService: PasswordManagerServiceService) {
    this.passwordForm = this.fb.group({
      passwordManagerId: [0],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      category: ['', [Validators.required]],
      app: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  CreateForm() {
    this.passwordForm = this.fb.group({
      passwordManagerId: [0],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      category: ['', [Validators.required]],
      app: ['', [Validators.required]]
    });
  }
  patchFormData(data: any) {
    this.passwordForm.patchValue({
      passwordManagerId: data?.passwordManagerId,
      userName: data?.userName,
      password: data?.decryptedPassword,
      category: data.category,
      app: data.app
    }
    );
  }


  close() {
    this.activeModal.close();
  }

  SavePassword(value: any) {
    this.passwordForm.markAllAsTouched;
    var passwordData =
    {
      passwordManagerId: value.passwordManagerId,
      userName: value.userName,
      decryptedPassword: value.password,
      category: value.category,
      app: value.app
    };
    if (this.passwordForm.valid) {
      if (passwordData.passwordManagerId == 0) {
        this.passwordService.Post(passwordData, 'AddPassword').subscribe(res => {
          if (res.statusCode == 'SUCCESS') {
            Swal.fire("SUCCESS",res.statusText,'success')
            this.close();
          }
          else
          {
            Swal.fire("FAILURE",res.statusText,'error')
          }
        }
        )
      }
      else {
        this.passwordService.Put(passwordData, 'UpdatePassword').subscribe(res => {
          if (res.statusCode == 'SUCCESS') {
            Swal.fire("SUCCESS",res.statusText,'success')
            this.activeModal.close();
          }
          else
          {
            Swal.fire("FAILURE",res.statusText,'error')
          }
        }
        )
      }
    }
  }
}
