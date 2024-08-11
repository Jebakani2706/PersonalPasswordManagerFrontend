import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-password-view',
  templateUrl: './password-view.component.html',
  styleUrls: ['./password-view.component.scss']
})
export class PasswordViewComponent implements OnInit {
  FormTitle: any = 'View Password Detail';
  passwordDetail :any={};
  hide:any=true;
  @Input('PasswordDetail') set PasswordDetail(event: any) {
    if (event?.passwordManagerId != 0) {
      this.passwordDetail = event;
    }
  }
  constructor(private activeModal: NgbActiveModal)
  {  }

  ngOnInit(): void {
  }

  close() {
    console.log(this.passwordDetail);
    this.activeModal.close();
  }

   
}
