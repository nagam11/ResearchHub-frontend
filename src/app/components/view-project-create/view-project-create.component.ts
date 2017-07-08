/**
 * created by MarlaN. 13.06.2017
 */
// --import libraries
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
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

@Component({
  selector: 'create-project',
  templateUrl: './view-project-create.component.html',
  styleUrls: [ './view-project-create.component.css' ],
  providers: [ProjectsService],
})

export class CreateProjectComponent implements OnInit {
  chairs: Chair[] = [];
  academics: Academic[] = [];
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

  constructor(
    private projectService: ProjectsService,
    private chairsService: ChairsService,
    private facultiesService: FacultiesService,
    private projectTypeService: ProjectTypeService,
    private academicsService: AcademicsService,
    private educationLevelService: EducationLevelService,
    private languageService: LanguagesService,
    private skillsService: SkillsService,
    private location: Location,
    private router: Router
    ) {
    // --skills instant search
    this.skillsService.search(this.term$).subscribe(results => this.skills = results);
  }
  // ---init
  ngOnInit(): void {
    this.project = new Project();
    this.selectedProjectType = new ProjectType();
    this.selectedChair = new Chair();
    this.selectedFaculty = new Faculty();
    this.selectedAcademic = new Academic();
    this.selectedProjectType.protjectType = 'Select a type of project';
    this.selectedChair.name = 'Please select';
    this.selectedFaculty.name = 'Please select';
    this.selectedAcademic.firstname = 'Please select';
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
    this.selectedProjectType = projectType;
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
    this.project._projetType = this.selectedProjectType;
    this.project._requeredLevel = this.educationLevels;
    this.project._languages = this.languages;
    this.project._superadvisor = this.selectedAcademic;
    //TODO add projects for academic
    //this.selectedAcademic.projects = [project];
    //this.academicsService.update(this.selectedAcademic);
    this.projectService.create(this.project);
    this.router.navigate(['/createsuccess']);
  }
  // --save selected skills
  selectedSkills(item: Skill) {
    console.log(item + ' was selected as skill.');
    this.selSkills.push(item);
  }

}

