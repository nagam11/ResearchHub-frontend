import 'rxjs/add/operator/switchMap';
import {Component, OnInit}      from '@angular/core';
import { ActivatedRoute, ParamMap ,Params, Router } from '@angular/router';
import {Location}               from '@angular/common';


import {ProjectsService} from '../../services/projects.service';
import {RatingsService} from '../../services/ratings.service';
import {CompaniesService} from '../../services/companies.service';
import {Project} from '../../data-model/project';
import {Rating} from '../../data-model/Rating';
import {Company} from '../../data-model/company';
import {visitProjectedRenderNodes} from "@angular/core/src/view/util";
@Component({
  selector: 'hero-detail',
  templateUrl: './research-rating.html',
  styleUrls: ['./research-rating.component.css']
})
export class ResearchRatingComponent implements OnInit {
  researches: Project;
  project: Project;
  rating: Rating;
  rate: Rating;
  ratings: Rating[] = [];

  companies: Company[] = [];

  selectedCompany: Company;
  interestedSkills: string;
  Description: string;
  constructor(
              private projectsService: ProjectsService,
              private route: ActivatedRoute,
              private ratingsService: RatingsService,
              private companiesService: CompaniesService,
              private router: Router,
              private location: Location) {
  }

  ngOnInit(): void {
    // this.project = new Project();
    this.rating = new Rating();
    this.rate = new Rating();
    this.route.params
      .subscribe((params: Params) => { this.projectsService.getProject(params['id']).then((project) => {
        this.project = project;
        console.log(this.project);
      });
  } );
    this.companiesService.getCompanies().then(companies => this.companies = companies);
}

  save(): void {
    this.ratingsService.createRating(this.rating)
      .then((rating) => {
        this.rating = rating;
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }
  // ---submit project
  onSubmit() {
   // this.rate.InterestFields = this.interestedSkills;
   // this.rate.Description = this.description;
   // this.project._partner = this.selectedCompany;
    this.project.ratingDes = this.Description;
    this.project.ratingFields = this.interestedSkills;
   // this.project.ratings.push(this.rate);
    // this.project.ratings = this.rate;
    console.log(this.project);
    this.projectsService.update(this.project).then(project  => {
      this.project = project;
    });
     this.router.navigate(['/ratesuccess']);
  }
}
