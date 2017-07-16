/**
 * created by MarlaN. 14.07.2017
 */
// ---imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Chair} from '../../data-model/chair';
import {ProjectType} from '../../data-model/projectType';
import {Academic} from '../../data-model/academic';
import {Company} from '../../data-model/company';
import { ProjectsService } from '../../services/projects.service';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/map';
import {Project} from "../../data-model/project";
import {EducationLevel} from "../../data-model/educationLevel";
import {Language} from "../../data-model/language";
import {Skill} from "../../data-model/skill";

@Component({
  selector: 'view-project',
  templateUrl: './view-project.component.html',
  styleUrls: [ './view-project.component.css' ]
})
export class ViewProjectComponent implements OnInit {
  project: Project = new Project();
  selectedChair: Chair = new Chair();
  selProjectType: ProjectType = new ProjectType();
  selectedSupervisor: Academic = new Academic();
  selRequiredLevel: EducationLevel = new EducationLevel();
  selRequiredLanguage: Language = new Language();
  selCompany: Company = new Company();
  selLevels: EducationLevel[] = [];
  selSkills: Skill[] = [];
  selLanguages: Language[] = [];

  constructor(
    // Service init
    private projectsService: ProjectsService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // --scroll window to front
    this.router.events.subscribe((path) => {
      window.scrollTo(0, 0);
    });
  }

  // ---init
  ngOnInit(): void {
    // -- init
    // --get selected Project from backend
    this.route.params
      .subscribe((params: Params) => { this.projectsService.getProject(params['id']).then((project) => {
        this.project = project;
        this.selProjectType = project._projetType;
        this.selectedChair = project._chair;
        this.selRequiredLevel = project._requeredLevel;
        this.selRequiredLanguage = project._languages;
        this.selectedSupervisor = project._superadvisor;
        this.selCompany = project._partner;
        this.selLevels = project._requeredLevel;
        this.selLanguages = project._languages;
        this.selSkills = project._requeredSkills;
      });
      });
  }

  // ---cancel
  cancel(): void {
    this.location.back();
  }

  // ---edit
  edit(project: Project) {
    this.router.navigate(['/editproject', project._id]);
  }

}

