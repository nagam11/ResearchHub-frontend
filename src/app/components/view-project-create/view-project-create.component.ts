/**
 * created by MarlaN. 13.06.2017
 */
// ---imports
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Research } from '../../research';
import {Chair} from '../../data-model/chair';
import {Faculty} from '../../data-model/faculty';
import {ProjectType} from '../../data-model/projectType';
import {Academic} from '../../data-model/academic';
import { ProjectsService } from '../../services/projects.service';
import { ChairsService } from '../../services/chairs.service';
import { FacultiesService } from '../../services/faculties.service';
import {AcademicsService} from '../../services/academics.service';
import { Location }               from '@angular/common';
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ProjectTypeService} from "../../services/projectType.service";
import {Project} from "../../data-model/project";

@Component({
  selector: 'create-project',
  templateUrl: './view-project-create.component.html',
  styleUrls: [ './view-project-create.component.css' ]
})
export class CreateProjectComponent implements OnInit {
  researches: Research[] = [];
  chairs: Chair[] = [];
  academics: Academic[] = [];
  faculties: Faculty[] = [];
  projectTypes: ProjectType[] = [];
  selectedChair: Chair;
  selectedFaculty: Faculty;
  selectedProjectType: ProjectType;
  selectedAcademic: Academic;
  project: Project;

  constructor(
    // Service init
    private researchService: ProjectsService,
    private chairsService: ChairsService,
    private facultiesService: FacultiesService,
    private projectTypeService: ProjectTypeService,
    private academicsService: AcademicsService,
    private location: Location,
    private router: Router
    ) { }

  // ---init
  ngOnInit(): void {
    this.project = new Project();
    this.selectedProjectType = new ProjectType();
    this.selectedProjectType.protjectType = 'Select a type of project';
    this.selectedChair = new Chair();
    this.selectedChair.name = 'Please select';
    this.selectedFaculty = new Faculty();
    this.selectedFaculty.name = 'Please select';
    this.selectedAcademic = new Academic();
    this.selectedAcademic.firstname = 'Please select';
    // Perform service calls
    this.projectTypeService.getProjectTypes().then(projectTypes => this.projectTypes = projectTypes);
    this.facultiesService.getFaculties().then(faculties => this.faculties = faculties);
    this.chairsService.getChairs().then(chairs => this.chairs = chairs);
    this.academicsService.getAcademics().then(academics => this.academics = academics);
  }

  cancel(): void {
    this.location.back();
  }

  save(): void {
    this.project._chair = this.selectedChair;
    this.project._projetType = this.selectedProjectType;
    console.log(this.selectedChair);
    this.researchService.create(this.project);
    this.router.navigate(['/createsuccess']);
  }

  // ---setup dropdowns
  dropdownselectedProjectType(projectType: ProjectType): void {
    this.selectedProjectType = projectType;
  }

  dropdownselectedChair(chair: Chair): void {
    this.selectedChair = chair;
  }

  dropdownselectedFaculty(faculty: Faculty): void {
    this.selectedFaculty = faculty;
    // If faculty selected, show only chairs of that faculty.
    this.chairs = faculty.chairs;
  }

  // ---submit project
  onSubmit() {
    this.project._chair = this.selectedChair;
    this.project._projetType = this.selectedProjectType;
    this.researchService.create(this.project);
    this.router.navigate(['/createsuccess']);
  }
  
}

