import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  moduleId: module.id,
  templateUrl: 'view-login.component.html'
})

export class ViewLoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    // this.authenticationService.logout();
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/internals/viewdashboard']);
    } else {
      this.authenticationService.logout();
    }

    // get return url from route parameters or default to '/login'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
    this.returnUrl = '/internals/viewdashboard';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          console.log(this.returnUrl);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}

