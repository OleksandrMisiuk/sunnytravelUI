import { TestBed } from '@angular/core/testing';

import { SigninMessageService } from './signin-message.service';

describe('SigninMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SigninMessageService = TestBed.get(SigninMessageService);
    expect(service).toBeTruthy();
  });
});
