/**
 * created by MarlaN. 13.06.2017
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

import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ProjectTypeService} from "../../services/projectType.service";
import {Project} from "../../data-model/project";
// import {Project} from "../../data-model/project";

@Component({
  selector: 'create-project',
  templateUrl: './view-project-create.component.html',
  styleUrls: [ './view-project-create.component.css' ]
})
export class CreateProjectComponent implements OnInit {
  researches: Research[] = [];
  chairs: Chair[] = [];
  faculties: Faculty[] = [];
  projectTypes: ProjectType[] = [];
 // projectTypes: ProjectType[] = [{'_id': 0, 'projectType' : 'Master thesis' }, {'_id': 1, 'projectType' : 'Bachelor thesis' },{'_id': 2, 'projectType' : 'IDP' }];
  // selectedChair: String = 'Please select';
  selectedChair: Chair;
 // projectTypes = {};
  // selectedFaculty: String = 'Please select';
  selectedFaculty: Faculty;
  // selectedProjectType: String = 'Please select';
  selectedProjectType: ProjectType;
  project: Project;
  /// /project = {};

  // project: {};

  constructor(
    private researchService: ProjectsService,
    private chairsService: ChairsService,
    private facultiesService: FacultiesService,
    private projectTypeService: ProjectTypeService,
    private location: Location,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.project = new Project();
    this.selectedProjectType = new ProjectType();
    this.selectedProjectType.protjectType = 'Select a type of project';
    this.selectedChair = new Chair();
    this.selectedChair.name = 'Please select';
    this.selectedFaculty = new Faculty();
    this.selectedFaculty.name = 'Please select';
    // this.researchService.getProjects().then(researches => this.researches = researches);
    this.projectTypeService.getProjectTypes().then(projectTypes => this.projectTypes = projectTypes);
    this.facultiesService.getFaculties().then(faculties => this.faculties = faculties);
    this.chairsService.getChairs().then(chairs => this.chairs = chairs);

  }

  cancel(): void {
    this.location.back();
  }

  save(): void {
    // TODO show alert that title should be filled
    // this.project.title = this.project.title.trim();
   // if (!title) { return; }
    /*this.researchService.create(title)
      .then(research => {
       // this.researches.push(research);
        this.cancel();
      });*/
    // this.project['projetType'] = this.selectedProjectType['_id'];
    // this.project.chair = this.selectedChair._id;
    this.project._chair = this.selectedChair;
    this.project._projetType = this.selectedProjectType;
    console.log(this.selectedChair);
    // this.project['chairs'] = this.selectedChair['_id'];
    this.researchService.create(this.project);
    this.router.navigate(['/createsuccess']);

  }

  dropdownselectedProjectType(projectType: ProjectType): void {
    this.selectedProjectType = projectType;
  }

  dropdownselectedChair(chair: Chair): void {
    this.selectedChair = chair;
  }

  dropdownselectedFaculty(faculty: Faculty): void {
    this.selectedFaculty = faculty;
  }

}

