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
import {LanguageService} from '../../services/languages.service';



@Component({
  selector: 'search-project',
  templateUrl: './view-project-search.component.html',
  styleUrls: [ './view-project-search.component.css' ]
})
export class SearchProjectComponent implements OnInit {

  private projects: Project[];
  searchCriteria: SearchCriteria;

  // private projectTypeService: ProjectTypeService;
  constructor(
    private projectTypeService: ProjectTypeService,
    private searchService: SearchService,
    private languageService: LanguageService
  ) {};

  ngOnInit(): void {
    this.searchCriteria = new SearchCriteria();
    this.projectTypeService.getProjectTypes().then(projectTypes => this.searchCriteria.setProjectTypes(projectTypes as ProjectType[]));
    this.languageService.getLangugaes().then(languages => this.searchCriteria.setSelectableLanguages(languages));

  };


  public searchForAproject(): void {
    console.log(this.searchCriteria.searchText);
    this.searchService.searchForProjectsByCriteria(this.searchCriteria).then(projects => this.projects = projects);
    console.log(JSON.stringify(this.searchCriteria));


  };

}

