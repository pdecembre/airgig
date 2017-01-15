import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth/auth.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private authSvc: AuthService, private router: Router) {
  }

  ngOnInit() {
      if(!this.authSvc.firebaseAuth){
        this.router.navigate(['/login']);
      }
  }

}
