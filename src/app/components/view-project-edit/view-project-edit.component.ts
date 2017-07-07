/**
 * created by MarlaN. 08.07.2017
 */
// ---imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap ,Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
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
import {EducationLevelService} from '../../services/educationLevel.service';
import {LanguagesService } from '../../services/languages.service';
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ProjectTypeService} from "../../services/projectType.service";
import {Project} from "../../data-model/project";
import {EducationLevel} from "../../data-model/educationLevel";
import {Language} from "../../data-model/language";

@Component({
  selector: 'edit-project',
  templateUrl: './view-project-edit.component.html',
  styleUrls: [ './view-project-edit.component.css' ]
})
export class EditProjectComponent implements OnInit {
  projectType: ProjectType;

  projects: Project[] = [];
  chairs: Chair[] = [];
  academics: Academic[] = [];
  faculties: Faculty[] = [];
  projectTypes: ProjectType[] = [];
  educationLevels: EducationLevel[] = [];
  languages: Language[] = [];
  selectedChair: Chair;
  selectedFaculty: Faculty;
  private selProjectType: ProjectType;
  selectedAcademic: Academic;
  project: Project;

  constructor(
    // Service init
    private projectsService: ProjectsService,
    private chairsService: ChairsService,
    private facultiesService: FacultiesService,
    private projectTypeService: ProjectTypeService,
    private academicsService: AcademicsService,
    private educationLevelService: EducationLevelService,
    private languageService: LanguagesService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  // ---init
  ngOnInit(): void {
    this.project = new Project();
    /*this.route.paramMap
      .switchMap((params: ParamMap) => this.projectService.getProject(+params.get('id')))
      .subscribe(projects => this.project = projects);*/

    this.route.params
      .subscribe((params: Params) => { this.projectsService.getProject(params['id']).then((project) => {
        this.project = project;
      });
      } );

    console.log(this.project);

    // this.selectedProjectType = new ProjectType();
    this.selProjectType = this.project._projetType;
    this.selectedChair = new Chair();
    // this.selectedChair.name = this.project._chair.name;
    this.selectedFaculty = new Faculty();
    // this.selectedFaculty.name = this.project._chair.faculty.
    this.selectedAcademic = new Academic();
    //this.selectedAcademic.firstname = this.project._advisor.firstname;
    // Perform service calls
    this.projectTypeService.getProjectTypes().then(projectTypes => this.projectTypes = projectTypes);
    this.facultiesService.getFaculties().then(faculties => this.faculties = faculties);
    this.chairsService.getChairs().then(chairs => this.chairs = chairs);
    this.academicsService.getAcademics().then(academics => this.academics = academics);
    this.educationLevelService.getEducationLevels().then(educationLevels => this.educationLevels = educationLevels );
    this.languageService.getLanguagesLevels().then(languages => this.languages = languages);
  }

  cancel(): void {
    this.location.back();
  }

  // ---setup dropdowns
  dropdownselectedProjectType(projectType: ProjectType): void {
    this.selProjectType = projectType;
  }

  dropdownselectedChair(chair: Chair): void {
    this.selectedChair = chair;
  }

  dropdownselectedAcademic(academic: Academic): void {
    this.selectedAcademic = academic;
  }

  dropdownselectedFaculty(faculty: Faculty): void {
    this.selectedFaculty = faculty;
    // If faculty selected, show only chairs of that faculty.
    this.chairs = faculty.chairs;
  }

  // ---submit project
  onSubmit() {
    this.project._chair = this.selectedChair;
    this.project._projetType = this.selProjectType;
    this.project._requeredLevel = this.educationLevels;
    this.project._languages = this.languages;
    this.project._superadvisor = this.selectedAcademic;
    let project = new Project();
    //TODO add projects for academic
    //this.selectedAcademic.projects = [project];
    //this.academicsService.update(this.selectedAcademic);
    //this.projectsService.update(project);
    this.router.navigate(['/createsuccess']);
  }

}

