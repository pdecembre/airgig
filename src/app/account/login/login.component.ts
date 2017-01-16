import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';
import { Login, Register } from '../../services/models/account';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) {
    this.loginModel = new Login('','');
  }

  loginModel: Login;

  isLoggedIn = false;

  onsubmit(){
    this.isLoggedIn = (this.loginModel.email !== '' && this.loginModel.password !=='');

    //this.authSvc.login(this.loginModel);
    //firebase.Promise<FirebaseAuthState>

        this.authSvc.login(this.loginModel)
                .then(lg => {
                    //this.firebaseAuth = lg.auth; 
                    this.authSvc.firebaseAuth = lg;
                    if(lg.uid != null && lg.uid !== '')
                    {
                      this.router.navigate(['/dashboard']);
                    }
                },
                err => {
                  console.log('AuthService.login error: ' + err.message + '\n' + err.stack );
                });

    if(this.authSvc.firebaseAuth != null)
    {
      console.log(this.authSvc.firebaseAuth);
    }

  }

  register(){

  }

  ngOnInit() {
  }

}
