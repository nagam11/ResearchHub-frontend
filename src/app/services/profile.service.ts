import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { StudentService } from './student.service';
import { JwtHelper } from 'angular2-jwt';
import { Student } from '../data-model/student';
import {UserService} from './user.service';

@Injectable()
export class Profile {
  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http, private router: Router, private studentService: StudentService,
              private authenticationService: AuthenticationService, private userService: UserService) { }


  getThisUserInfo() {
    let token = localStorage.getItem('currentUser');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      let decoded = this.jwtHelper.decodeToken(token).user;
      if (decoded) {
        return decoded.kind;
      }
    }
    /*
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      let decoded = this.jwtHelper.decodeToken(token).user;
      let id = decoded._id;
      this.userService.getById(id)
        .subscribe(
          data => {
            console.log('profile loaded');
          },
          error => {
            console.log(error);
          });
    } else {
      this.authenticationService.logout();
    }*/
  }

  updateThisUser(student: Student) {
    this.studentService.updateStudent(student)
      .subscribe(
        data => {
          console.log('profile updated');
          // localStorage.removeItem('profile');
          this.router.navigate(['/internals/updatesuccess']);
        },
        error => {
          console.log(error);
          this.router.navigate(['/internals/updatefailure']);
        });
  }
}
