import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
   moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) {
  }

  login(){

  }

  ngOnInit() {
  }

}
