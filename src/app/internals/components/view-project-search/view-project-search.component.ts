/**
 * Created by Devgen on 06.07.2017.
 */
import { Component, OnInit } from '@angular/core';
import {ProjectType} from '../../../data-model/projectType';
import 'rxjs/add/operator/map';
import {ProjectTypeService} from '../../../services/projectType.service';
import {Project} from '../../../data-model/project';
import {SearchCriteria} from '../../../data-model/searchCriteria';
import {SearchService} from '../../../services/search.service';
import {LanguagesService} from '../../../services/languages.service';
import {SkillsService} from '../../../services/skills.service';
import {Subject} from 'rxjs/Subject';
import {Skill} from '../../../data-model/skill';
import { FormsModule }   from '@angular/forms';
import {UserService} from "../../../services/user.service";
import { JwtHelper } from 'angular2-jwt';
import {Student} from "../../../data-model/student";
import {User} from "../../../data-model/user";

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
  private jwtHelper: JwtHelper = new JwtHelper();
  private user: User;

  // private projectTypeService: ProjectTypeService;
  constructor(
    private projectTypeService: ProjectTypeService,
    private searchService: SearchService,
    private languageService: LanguagesService,
    private skillsService: SkillsService,
    private userService: UserService
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

  addProjectToUserFavorites(project: Project) {
    // todo
    console.log('project'+JSON.stringify(project))
      let user = this.jwtHelper.decodeToken(localStorage.getItem('currentUser')).user;
      this.userService.findById(user._id).then((userFull) => {
        this.user = userFull;
        //  update the students array in projects
        // this.project.applications.push(this.student);
        this.user._favoritsprojects.push(project);
        // console.log(JSON.stringify(this.user));
        this.userService.updateUsersFavorit(this.user);
       // this.router.navigate(['/internals/createsuccess']);
      });
  };
  public searchForAproject(): void {

    this.searchService.searchForProjectsByCriteria(this.searchCriteria.getSearchCriteriaToSend()).then(projects => this.projects = projects);
    console.log(JSON.stringify(this.searchCriteria));

  };

}

