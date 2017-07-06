/**
 * Created by Devgen on 06.07.2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Research } from '../../research';
import {Chair} from '../../data-model/chair';
import {Faculty} from '../../data-model/faculty';
import {ProjectType} from '../../data-model/projectType';
import { ProjectsService } from '../../services/projects.service';
import { ChairsService } from '../../services/chairs.service';
import { FacultiesService } from '../../services/faculties.service';
import { Location }               from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ProjectTypeService} from "../../services/projectType.service";
import {Project} from "../../data-model/project";
import {ProjectSearchValues} from "../../data-model/projectSearchValues";
import {SearchCriteria} from "../../data-model/searchCriteria";
import {SearchService} from "../../services/search.service";


@Component({
  selector: 'search-project',
  templateUrl: './view-project-search.component.html',
  styleUrls: [ './view-project-search.component.css' ]
})
export class SearchProjectComponent implements OnInit {

  private projects: Project[];
  private chairs: Chair[];
  private faculties: Faculty[];
  private projectTypes: ProjectType[];
  private searchValues: ProjectSearchValues;
  searchCriteria: SearchCriteria;

  // private projectTypeService: ProjectTypeService;
  constructor(
    private projectTypeService: ProjectTypeService,
    private searchService: SearchService
  ) {};

  ngOnInit(): void {
    this.searchCriteria = new SearchCriteria();
    this.projectTypeService.getProjectTypes().then(projectTypes => this.searchCriteria.setProjectTypes(projectTypes as ProjectType[]));

  };


  public searchForAproject(): void {
    console.log(this.searchCriteria.searchText);
    this.searchService.searchForProjectsByCriteria(this.searchCriteria).then(projects => this.projects = projects);
    console.log(JSON.stringify(this.searchCriteria));


  };

}

