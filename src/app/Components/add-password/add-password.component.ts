import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { PasswordManagerServiceService } from 'src/app/Service/password-manager-service.service';

@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.scss']
})
export class AddPasswordComponent implements OnInit {
  passwordForm: UntypedFormGroup ;
  FormTitle :any = 'Create Password Manager';
  @Input('PasswordDetails') set PasswordDetails(event: any) {
    this.CreateForm();
    if( event.passwordManagerId != 0)
    {
      this.FormTitle = 'Update Password Manager';
      this.patchFormData(event);
    }
  };

  constructor(private fb: FormBuilder, private activeModal: NgbActiveModal,public passwordService: PasswordManagerServiceService) {
    this.passwordForm = this.fb.group({
      passwordManagerId : [0],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      category: ['', [Validators.required]],
      app: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  CreateForm()
  {
    this.passwordForm = this.fb.group({
      passwordManagerId : [0],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      category: ['', [Validators.required]],
      app: ['', [Validators.required]]
    });
  }
  patchFormData(data:any)
  {
     this.passwordForm.patchValue({
      passwordManagerId : data.passwordManagerId,
      userName:  data.userName,
      password:  data.password,
      category:  data.category,
      app:  data.app
     }
     );
  }
  close() {
    this.PasswordDetails = null;
    this.activeModal.close();
  }

  SavePassword(value : any)
  {
     this.passwordForm.markAllAsTouched;
     var passwordData = 
     {
       passwordManagerId : value.passwordManagerId,
       userName : value.userName,
       password : value.password,
       category : value.category,
       app : value.app
     };
     debugger;
     if(this.passwordForm.valid)
     {
         if(passwordData.passwordManagerId == 0)
          {
            this.passwordService.Post(passwordData,'AddPassword').subscribe(res=>
              {
                  if(res.statusCode == 'SUCCESS')
                  {
                    console.log(res.statusText);
                  }
              }
            )
          }
          else
          {
            this.passwordService.Put(passwordData,'UpdatePassword').subscribe(res=>
              {
                  if(res.statusCode == 'SUCCESS')
                  {
                    console.log(res.statusText);
                  }
              }
            )
          }
     }
  }
}
