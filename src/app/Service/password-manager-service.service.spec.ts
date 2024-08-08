import { TestBed } from '@angular/core/testing';

import { PasswordManagerServiceService } from './password-manager-service.service';

describe('PasswordManagerServiceService', () => {
  let service: PasswordManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
