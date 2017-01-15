import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(private af: AngularFire) {

    this.af.auth.subscribe(fbAuth => {
      if(!fbAuth || fbAuth.expires){
          this.logout();
        }
      this.firebaseAuth = fbAuth;
    });
  }

  firebaseAuth:any

  credentials:any
  

  login(email:string, pwd:string){    
    var credentials:any = { email: email, password: pwd };
    this.af.auth.login(credentials);
    this.credentials = credentials;
  }

  logout() {
     this.af.auth.logout();
  }

  createUser() : any
  {
     var usr = this.af.auth.createUser(this.credentials)
     return usr;
    //return '';
  }

}
