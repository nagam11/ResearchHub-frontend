import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { JwtHelper } from 'angular2-jwt';
import { Profile } from '../../../services/profile.service';
import {CompanyGuard} from '../../../guard/CompanyGuard';
import {AcademicGuard} from '../../../guard/AcademicGuard';
import {StudentGuard} from '../../../guard/StudentGuard';
@Component({
  templateUrl: './view-header.component.html',
  styleUrls: ['./view-header.component.css']
})

export class InternalsAppComponent {
  private jwtHelper: JwtHelper = new JwtHelper();
  Logo = 'ResearchHub';
  UserName = 'username';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private profileService: Profile,
    private companyGuard: CompanyGuard,
  private  studentGuard: StudentGuard,
  private academicGuard: AcademicGuard) { }

  ngOnInit() {
    this.UserName  = '';
    let token = localStorage.getItem('currentUser');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      let decoded = this.jwtHelper.decodeToken(token).user;
      if (decoded) {
        if (decoded.firstname && decoded.lastname) {
          this.UserName = decoded.firstname.concat(' ', decoded.lastname);
        } else {
          this.UserName = decoded.email;
        }
      }
      console.log(this.UserName);
    }
  }

  logout() {
    this.authenticationService.logout();
  }
}
