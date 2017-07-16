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
 // rating: Rating;
  rate: Rating;
  ratings: Rating[] = [];
  temp: any;

  companies: Company[] = [];
  id: string;

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
    this.project = new Project();
   // this.rating = new Rating();
    this.rate = new Rating();
    this.route.params
      .subscribe((params: Params) => { this.projectsService.getProject(params['id']).then((project) => {
        this.project = project;
      });
  } );
   // this.ratings = this.project.ratings;
   // this.companiesService.getCompanies().then(companies => this.companies = companies);
}

  save(): void {
    this.rate.InterestFields = this.interestedSkills;
    this.rate.Description = this.Description;
    this.ratingsService.createRating(this.rate).then((rate) => {
      this.rate = rate;
       // this.goBack();
      });
    // this.ratingsService.getRatings().then((ratings) => {
    //  this.ratings = ratings;
    // });
    this.ratings = this.project.ratings;
    console.log('received data...');
    console.log(this.project.ratings);
    this.ratings.push(this.rate);
    this.project.ratings = this.ratings;
    console.log('ID for created rating...');
    console.log(this.rate);
    console.log(this.rate._id);
   // alert(this.rate._id);
   // console.log(this.temp._id);
   // this.project.ratings.push(this.rate);

    this.projectsService.update(this.project).then(project  => {
      this.project = project;
    });
  }

  goBack(): void {
    this.location.back();
  }
  // ---submit project
  onSubmit() {
    this.rate.InterestFields = this.interestedSkills;
    this.rate.Description = this.Description;
    this.ratingsService.createRating(this.rate).then((rating) => {
      this.rating = rating;
      this.project.ratings.push(this.rating);
      this.projectsService.update(this.project);
    });

   // this.project._partner = this.selectedCompany;
    //this.project.ratingDes = this.Description;
    //this.project.ratingFields = this.interestedSkills;
   // this.project.ratings.push(this.rate);
    //this.project.ratings = this.rate;
  /*  this.projectsService.update(this.project).then(project  => {
      this.project = project;
    });*/
    this.router.navigate(['/ratesuccess']);
  }
}
