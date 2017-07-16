/**
 * created by MarlaN. 10.06.2017
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Router } from '@angular/router';
import { AppRoutingModule } from './config/app-routing.module';
import { InternalsModule } from './internals/internals.module';

// Imports for loading & configuring the in-memory web api
// TODO delete in memory data service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { JsonpModule } from '@angular/http';

// import Components
import { AppComponent }         from './components/app-home/app.component';
import { AlertComponent } from './components/alert/alert.component';
import { AuthGuard } from './guard/guard';
import { ViewLoginComponent } from './components/view-login/view-login.component';
import { ViewRegisterComponent } from './components/view-register/view-register.component';
// import { ViewLandingComponent } from './components/view-landing/view-landing.component';
import { ViewRegisterSelectorComponent } from './components/view-register-sel/view-register-sel.component';
import { ViewRegisterStudentComponent } from './components/view-register-student/view-register-student.component';
import { ViewRegisterAcademicComponent } from './components/view-register-academic/view-register-academic.component';
import { ViewRegisterCompanyComponent } from './components/view-register-company/view-register-company.component';
import { RegisterSuccessComponent } from './components/view-register-sucess/view-register-success.component';
import { RegisterFailureComponent } from './components/view-register-failure/view-register-failure.component';
import { PageNotFoundComponent } from './components/view-not-found/view-not-found.component';
/*
import { AppComponent }         from './components/app-header/app.component';
import { DashboardComponent }   from './components/view-rating-dashboard/view-rating-dashboard.component';
import { ResearchRatingComponent }  from './components/view-project-rating/research-rating.component';
import { CreateProjectComponent }  from './components/view-project-create/view-project-create.component';
import { ViewProjectsComponent }  from './components/view-projects/view-projects.component';
import {CreateProjectSuccessComponent} from './components/view-project-create-success/view-project-create-success.component';
import {ViewDashboardComponent} from './components/view-dashboard/view-dashboard.component';
import {EditProjectComponent} from './components/view-project-edit/view-project-edit.component';
import {CreateProjectRatingSuccessComponent} from './components/view-project-rate-success/view-project-rate-success.component';
import {ViewProjectComponent} from './components/view-project/view-project.component';
*/
// import Services
import { ProjectsService } from './services/projects.service';
import { ChairsService } from './services/chairs.service';
import { FacultiesService } from './services/faculties.service';
import { SearchService }          from './services/search.service';
import { ProjectTypeService } from './services/projectType.service';
import {SearchProjectComponent} from './components/view-project-search/view-project-search.component';
import { AcademicsService } from './services/academics.service';
import { EducationLevelService } from './services/educationLevel.service';
import { LanguagesService } from './services/languages.service';
import { SkillsService } from './services/skills.service';
import {CompaniesService} from './services/companies.service';
import {RatingsService} from './services/ratings.service';
import { UserService } from './services/user.service';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule,
    InternalsModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    ViewLoginComponent,
    ViewRegisterComponent,
    // ViewLandingComponent,
    PageNotFoundComponent,
    ViewRegisterSelectorComponent,
    ViewRegisterStudentComponent,
    ViewRegisterAcademicComponent,
    ViewRegisterCompanyComponent,
    RegisterSuccessComponent,
    RegisterFailureComponent
  ],
  providers: [ ProjectsService,
               SearchService, ProjectsService, ChairsService, FacultiesService, ProjectTypeService, AcademicsService,
    EducationLevelService, LanguagesService, SkillsService, AuthGuard, CompaniesService, RatingsService, AlertService, AuthenticationService, UserService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

/*
DashboardComponent,
ResearchRatingComponent,
CreateProjectComponent,
ViewProjectsComponent,
CreateProjectSuccessComponent,
ViewDashboardComponent,
SearchProjectComponent,
CreateProjectRatingSuccessComponent,
EditProjectComponent,
ViewProjectComponent*/
