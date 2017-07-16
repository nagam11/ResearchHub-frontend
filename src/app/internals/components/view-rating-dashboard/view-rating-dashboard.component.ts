// Createb by Moawiah --- 10/06/2017 //


import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '../../../services/projects.service';
import {Project} from '../../../data-model/project';


import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import data model
import {Rating} from '../../../data-model/Rating';
// import service
//import { RatingsService } from '../../services/ratings.service';
import { CompaniesService } from '../../../services/companies.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: './view-rating-dashboard.component.html',
  styleUrls: [ './view-rating-dashboard.component.css' ],
})
export class DashboardComponent implements OnInit {

  ratings: Rating[] = [];
  projects: Project[] = [];
  // selected rating
  // selectedRating: Rating;
  constructor(
    private projectsService: ProjectsService,
    private companiesService: CompaniesService
    // private ratingsService: RatingsService
  ) { }
  ngOnInit(): void {
    this.projectsService.getProjects().then(projects => {
      this.projects = projects;
    });
    // this.ratingsService.getRatings().then(ratings => this.ratings = ratings);
  }
}

