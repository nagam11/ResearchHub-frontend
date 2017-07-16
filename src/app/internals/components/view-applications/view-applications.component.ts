/**
 * created by MarlaN. 18.06.2017
 */
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import {Chair} from '../../../data-model/chair';
import {Faculty} from '../../../data-model/faculty';
import {ProjectType} from '../../../data-model/projectType';
import { ProjectsService } from '../../../services/projects.service';
import { ChairsService } from '../../../services/chairs.service';
import { FacultiesService } from '../../../services/faculties.service';
import { Location }               from '@angular/common';
import { StudentService} from '../../../services/student.service';
import {CompanyGuard} from '../../../guard/CompanyGuard';
import {AcademicGuard} from '../../../guard/AcademicGuard';
import {StudentGuard} from '../../../guard/StudentGuard';
import { JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Project} from '../../../data-model/project';

@Component({
  selector: 'view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: [ './view-applications.component.css' ]
})
export class ViewApplicationsComponent implements OnInit {
  projects: Project[] = [];
  private jwtHelper: JwtHelper = new JwtHelper();
  appliedProjects: Project[] = [];

  constructor(
    private projectsService: ProjectsService,
    private studentService: StudentService,
    private location: Location,
    private router: Router,
    private companyGuard: CompanyGuard,
    private  studentGuard: StudentGuard,
    private academicGuard: AcademicGuard) { }

  ngOnInit(): void {
    this.projectsService.getProjects().then(projects => this.projects = projects);
    let user = this.jwtHelper.decodeToken(localStorage.getItem('currentUser')).user;
    this.studentService.getById(user._id).then((student) => {
      console.log(student.projectsApplied);
      for (let project of student.projectsApplied){
        console.log(project);
        this.projectsService.getProject(project).then((f_project) => {
          this.appliedProjects.push(f_project);
        });
      }
    });
  }

  // --edit project
  edit(project: Project) {
    this.router.navigate(['/internals/editproject', project._id ]);
  }

  delete(_id: string) {
    if (confirm('You are about to delete a project. Click yes to proceed.') === true) {
      this.projectsService.delete(_id);
      this.router.navigate(['/internals/createsuccess']);
    } else {
    }
  }

  open( project: Project) {
    this.router.navigate(['/internals/viewproject', project._id]);
  }
}
