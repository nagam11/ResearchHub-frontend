// Createb by Moawiah --- 10/06/2017 //


import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '../../../services/projects.service';
import {Project} from '../../../data-model/project';


import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'my-dashboard',
  templateUrl: './view-rating-dashboard.component.html',
  styleUrls: [ './view-rating-dashboard.component.css' ],
})
export class DashboardComponent implements OnInit {

  projects: Project[] = [];
  constructor(private ProjectsService: ProjectsService) { }
  ngOnInit(): void {
    this.ProjectsService.getProjects().then(projects => this.projects = projects);
  }
}

