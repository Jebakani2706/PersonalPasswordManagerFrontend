import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordManagerSummaryComponent } from './password-manager-summary.component';

describe('PasswordManagerSummaryComponent', () => {
  let component: PasswordManagerSummaryComponent;
  let fixture: ComponentFixture<PasswordManagerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordManagerSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordManagerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
