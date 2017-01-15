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
  }

  loginModel: Login = new Login('','');

  isLoggedIn = false;

  onsubmit(){
    this.isLoggedIn = (this.loginModel.email !== '' && this.loginModel.password !=='');
    console.log(this.isLoggedIn);
    console.log(this.loginModel);
  }



  register(){

  }

  ngOnInit() {
  }

}
