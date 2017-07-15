import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { CompaniesService } from '../../services/companies.service';
import { Company } from '../../data-model/company';


@Component({
  moduleId: module.id,
  templateUrl: './view-register-company.component.html',
  styleUrls: [ './view-register-company.component.css' ]
})

export class ViewRegisterCompanyComponent implements OnInit {
  model: any = {};
  loading = false;
  companies: Company[] = [];
  selectedCompany: Company;

  constructor(
    private router: Router,
    private companiesService: CompaniesService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.companiesService.getCompanies().then(companies => this.companies = companies);
  }

  register() {
    this.loading = true;
    this.model.company = this.selectedCompany;
    this.companiesService.createRepresentative(this.model)
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
