/**
 * created by MarlaN. 08.07.2017
 */
// --import libraries
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap ,Params }            from '@angular/router';
import { Location }               from '@angular/common';
import { Subject } from 'rxjs/subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
// --import data models
import {Chair} from '../../data-model/chair';
import {Faculty} from '../../data-model/faculty';
import {ProjectType} from '../../data-model/projectType';
import {Academic} from '../../data-model/academic';
import {Project} from '../../data-model/project';
import {Company} from '../../data-model/company';
import {EducationLevel} from '../../data-model/educationLevel';
import {Language} from '../../data-model/language';
import {Skill} from '../../data-model/skill';
// ---imports Services
import { ProjectsService } from '../../services/projects.service';
import { ChairsService } from '../../services/chairs.service';
import { FacultiesService } from '../../services/faculties.service';
import {AcademicsService} from '../../services/academics.service';
import {EducationLevelService} from '../../services/educationLevel.service';
import {ProjectTypeService} from '../../services/projectType.service';
import {LanguagesService } from '../../services/languages.service';
import {SkillsService} from '../../services/skills.service';
import {CompaniesService} from '../../services/companies.service';

@Component({
  selector: 'edit-project',
  templateUrl: './view-project-edit.component.html',
  styleUrls: [ './view-project-edit.component.css' ]
})

export class EditProjectComponent implements OnInit {
  chairs: Chair[] = [];
  academics: Academic[] = [];
  companies: Company[] = [];
  faculties: Faculty[] = [];
  projectTypes: ProjectType[] = [];
  educationLevels: EducationLevel[] = [];
  languages: Language[] = [];
  project: Project;
  skills: Array<Skill>;
  term$ = new Subject<string>();
  selSkills: Array<Skill> = [];
  // --selectedItems
  selectedChair: Chair;
  selectedFaculty: Faculty;
  selectedProjectType: ProjectType;
  selectedAcademic: Academic;
  selectedCompany: Company;
  selectedRequiredLevel: EducationLevel[] = [];
  selectedLanguages: Language[] = [];
  selectedEducationLevels: EducationLevel[] = [];
  stringOfLevels: String = '';
  stringsOfLanguages: String = '';

  constructor(
    // Service init
    private projectService: ProjectsService,
    private chairsService: ChairsService,
    private facultiesService: FacultiesService,
    private projectTypeService: ProjectTypeService,
    private academicsService: AcademicsService,
    private educationLevelService: EducationLevelService,
    private languageService: LanguagesService,
    private skillsService: SkillsService,
    private companiesService: CompaniesService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // --skills instant search
    this.skillsService.search(this.term$).subscribe(results => this.skills = results);
    // --scroll window to front
    this.router.events.subscribe((path) => {
      window.scrollTo(0, 0);
    });

    this.project = new Project();
    // --get selected Project from backend
    this.route.params
      .subscribe((params: Params) => { this.projectService.getProject(params['id']).then((project) => {
        this.project = project;
        this.selectedProjectType = project._projetType;
        this.selectedChair = project._chair;
        this.selectedCompany = project._partner;
        this.selectedAcademic = project._superadvisor;
        this.selSkills = project._requeredSkills;
        this.selectedEducationLevels = project._requeredLevel;
        this.selectedLanguages = project._languages;
        this.selectedCompany = project._partner;
        if (this.selectedEducationLevels.length > 1) {
            this.stringOfLevels = this.selectedEducationLevels[0].level.concat(this.selectedEducationLevels[1].level);
        } else {
          this.stringOfLevels = this.selectedEducationLevels[0].level;
        }
        if (this.selectedLanguages.length > 1) {
          this.stringsOfLanguages = this.selectedLanguages[0].language.concat(this.selectedLanguages[1].language);
        } else {
          this.stringsOfLanguages = this.selectedLanguages[0].language;
        }
      });
      });
  }

  // ---init
  ngOnInit(): void {
    // Perform service calls
    this.projectTypeService.getProjectTypes().then(projectTypes => this.projectTypes = projectTypes);
    this.facultiesService.getFaculties().then((faculties) => {
      this.faculties = faculties;
      // ---workaround in place of service get Faculty for Chair
      for (let i = 0; i < this.faculties.length; i++) {
        for (let j = 0; j < this.faculties[i].chairs.length; j++) {
          if (this.faculties[i].chairs[j].name === this.selectedChair.name) {
            this.selectedFaculty = this.faculties[i];
          }
        }
      }

    });
    this.chairsService.getChairs().then(chairs => this.chairs = chairs);
    this.academicsService.getAcademics().then(academics => this.academics = academics);
    this.educationLevelService.getEducationLevels().then(educationLevels => this.educationLevels = educationLevels );
    this.languageService.getLanguagesLevels().then(languages => this.languages = languages);
    this.companiesService.getCompanies().then(companies => this.companies = companies);
  }

  cancel(): void {
    this.location.back();
  }

  // --save selected skills
  selectedSkills(item: Skill) {
    this.selSkills.push(item);
  }
  // --show only chairs of selected faculty
  dropdownselectedFaculty(faculty: Faculty) {
    this.chairs = faculty.chairs;
  }

  // ---submit project
  onSubmit() {
    this.project._chair = this.selectedChair;
    this.project._projetType = this.selectedProjectType;
    this.project._requeredLevel = this.educationLevels;
    this.project._languages = this.languages;
    this.project._superadvisor = this.selectedAcademic;
    this.project._requeredSkills = this.selSkills;
    this.project._requeredLevel = this.selectedRequiredLevel;
    this.project._languages = this.selectedLanguages;
    this.project._partner = this.selectedCompany;
    this.projectService.update(this.project);
    this.router.navigate(['/createsuccess']);
  }

  equals(o1: any, o2: any) {
    if (o1 != null && o2 != null) {
      return o1._id === o2._id;
    }
  }

  // --save selected required Levels
  levelsCheckbox(item: EducationLevel, element: HTMLInputElement): void {
    if (element.checked) {
      this.selectedRequiredLevel.push(item);
    } else {
      this.selectedRequiredLevel = this.selectedRequiredLevel.filter(arrayItem => arrayItem !== item);
    }
    for (let entry of this.selectedRequiredLevel) {
    }
  }

  // --save selected languages
  languageCheckbox(item: Language, element: HTMLInputElement): void {
    if (element.checked) {
      this.selectedLanguages.push(item);
    } else {
      this.selectedLanguages = this.selectedLanguages.filter(arrayItem => arrayItem !== item);
    }
    for (let entry of this.selectedLanguages) {
    }
  }
}

