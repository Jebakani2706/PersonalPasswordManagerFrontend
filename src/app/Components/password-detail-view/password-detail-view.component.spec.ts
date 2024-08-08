import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordDetailViewComponent } from './password-detail-view.component';

describe('PasswordDetailViewComponent', () => {
  let component: PasswordDetailViewComponent;
  let fixture: ComponentFixture<PasswordDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
