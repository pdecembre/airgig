/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

    it('should log in users', inject([AuthService, AngularFire], (service: AuthService, af: AngularFire) => {
    expect(service.login).call(af.auth);
  }));
});
