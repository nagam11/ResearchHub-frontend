/**
 * Created by Devgen on 06.07.2017.
 */
import { Component, OnInit } from '@angular/core';
import {ProjectType} from '../../data-model/projectType';
import 'rxjs/add/operator/map';
import {ProjectTypeService} from '../../services/projectType.service';
import {Project} from '../../data-model/project';
import {SearchCriteria} from '../../data-model/searchCriteria';
import {SearchService} from '../../services/search.service';
import {LanguagesService} from '../../services/languages.service';
import {SkillsService} from "../../services/skills.service";
import {Subject} from "rxjs/Subject";
import {Skill} from "../../data-model/skill";
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'search-project',
  templateUrl: './view-project-search.component.html',
  styleUrls: [ './view-project-search.component.css' ]
})
export class SearchProjectComponent implements OnInit {

  private projects: Project[];
  searchCriteria: SearchCriteria;

  private term$ = new Subject<string>();
  private availbaleSkills: Array<Skill> = [];

  // private projectTypeService: ProjectTypeService;
  constructor(
    private projectTypeService: ProjectTypeService,
    private searchService: SearchService,
    private languageService: LanguagesService,
    private skillsService: SkillsService
  ) {
    this.skillsService.search(this.term$).subscribe(results => this.availbaleSkills = results);
  };

  ngOnInit(): void {
    this.searchCriteria = new SearchCriteria();
    this.projectTypeService.getProjectTypes().then(projectTypes => this.searchCriteria.setProjectTypes(projectTypes as ProjectType[]));
    this.languageService.getLanguagesLevels().then(languages => this.searchCriteria.setSelectableLanguages(languages));

  };

  // --save selected skills
  selectedSkills(skill: Skill) {
    this.searchCriteria.skills.push(skill);
  }
  deleteSelectedSkill(index: number) {
    this.searchCriteria.skills.splice(index);

  };

  projectTypeCheckbox(item: ProjectType, element: HTMLInputElement): void {

  }



  public searchForAproject(): void {

    this.searchService.searchForProjectsByCriteria(this.searchCriteria.getSearchCriteriaToSend()).then(projects => this.projects = projects);
    console.log(JSON.stringify(this.searchCriteria));

  };

}

