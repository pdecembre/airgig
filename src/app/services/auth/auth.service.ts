import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseAuthState} from 'angularfire2';
import { Login, Register } from '../models/account';


@Injectable()
export class AuthService {

  constructor(private af: AngularFire) {

    this.af.auth.subscribe(fbAuth => {
      if(!fbAuth || !fbAuth.auth || !fbAuth.auth.email){
          this.logout();
        }
      this.firebaseAuth = fbAuth;
    });
  }

  firebaseAuth:any

  credentials:Login
  
  login(login:Login) : firebase.Promise<FirebaseAuthState>{   

    this.credentials = login;
    return this.af.auth.login(login);

    // this.af.auth.login(login)
    //             .then(
    //             lg => {this.firebaseAuth = lg.auth; },
    //             er => { console.log('AuthService.login error: ' + er.message + '\n' + er.stack );
    //             });

  }

  logout() {
    console.log('loging out');
     this.af.auth.logout();
  }

  createUser() : any
  {
    var email:string;

     this.af.auth.createUser(this.credentials)
                .then(u => {
                          email = u.auth.email;
                        }, 
                      err => {
                        console.log('AuthService.createUser error: ' + err.message + '\n' + err.stack );
                      });      
    return email;
  }

}
