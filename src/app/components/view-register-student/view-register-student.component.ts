import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../services/alert.service';
import { StudentService } from '../../services/student.service';

@Component({
  moduleId: module.id,
  templateUrl: './view-register-student.component.html',
  styleUrls: [ './view-register-student.component.css' ]
})

export class ViewRegisterStudentComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private studentService: StudentService,
    private alertService: AlertService) { }

  register() {
    this.loading = true;
    this.studentService.createStudent(this.model)
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/success']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
          this.router.navigate(['/failure']);
        });
  }
}
