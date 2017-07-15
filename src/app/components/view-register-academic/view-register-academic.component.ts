import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { AcademicsService } from '../../services/academics.service';
import { Chair } from '../../data-model/chair';
import { ChairsService } from '../../services/chairs.service';

@Component({
  moduleId: module.id,
  templateUrl: './view-register-academic.component.html',
  styleUrls: [ './view-register-academic.component.css' ]
})

export class ViewRegisterAcademicComponent implements OnInit {
  model: any = {};
  loading = false;
  chairs: Chair[] = [];
  selectedChair: Chair;

  constructor(
    private router: Router,
    private academicService: AcademicsService,
    private chairsService: ChairsService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.chairsService.getChairs().then(chairs => this.chairs = chairs);
  }

  register() {
    this.loading = true;
    this.model.chair = this.selectedChair;
    this.academicService.createAcademic(this.model)
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
