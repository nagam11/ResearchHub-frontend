import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { CommonModule }  from '@angular/common';
import { InternalsRoutingModule } from './internals-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';

// Imports for loading & configuring the in-memory web api
// TODO delete in memory data service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { JsonpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
// import Directives
import { ImagePreview } from '../directives/preview.directive';
// import Components
import { InternalsAppComponent } from './components/internals-home/internals-home.component';
import { DashboardComponent } from './components/view-rating-dashboard/view-rating-dashboard.component';
import { ResearchRatingComponent }  from './components/view-project-rating/research-rating.component';
import { CreateProjectComponent }  from './components/view-project-create/view-project-create.component';
import { ViewProjectsComponent }  from './components/view-projects/view-projects.component';
import { CreateProjectSuccessComponent } from './components/view-project-create-success/view-project-create-success.component';
import { ViewDashboardComponent } from './components/view-dashboard/view-dashboard.component';
import { EditProjectComponent } from './components/view-project-edit/view-project-edit.component';
import { SearchProjectComponent } from './components/view-project-search/view-project-search.component';
import { ViewSidebarComponent } from './components/view-sideboard/view-sidebar.component';
import { EditProfileComponent } from './components/view-edit-profile/view-edit-profile.component';
import { UpdateSuccessComponent } from './components/view-update-sucess/view-update-success.component';
import { UpdateFailureComponent } from './components/view-update-failure/view-update-failure.component';
// import Services
import { ProjectsService } from '../services/projects.service';
import { ChairsService } from '../services/chairs.service';
import { FacultiesService } from '../services/faculties.service';
import { SearchService }          from '../services/search.service';
import { ProjectTypeService } from '../services/projectType.service';
import { AcademicsService } from '../services/academics.service';
import { EducationLevelService } from '../services/educationLevel.service';
import { LanguagesService } from '../services/languages.service';
import { SkillsService } from '../services/skills.service';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { Profile } from '../services/profile.service';
import { StudentService } from '../services/student.service';
import { CompaniesService } from '../services/companies.service';

@NgModule({
  imports: [
    FormsModule,
    InternalsRoutingModule,
    JsonpModule,
    CommonModule,
    FileUploadModule,
    ImageUploadModule
  ],
  declarations: [
    InternalsAppComponent,
    DashboardComponent,
    ResearchRatingComponent,
    CreateProjectComponent,
    ViewProjectsComponent,
    CreateProjectSuccessComponent,
    ViewDashboardComponent,
    SearchProjectComponent,
    EditProjectComponent,
    ViewSidebarComponent,
    EditProfileComponent,
    UpdateSuccessComponent,
    UpdateFailureComponent,
    ImagePreview
  ],
  providers: [ ProjectsService,
    SearchService, ProjectsService, ChairsService, FacultiesService, ProjectTypeService, AcademicsService,
    EducationLevelService, LanguagesService, SkillsService, AlertService, AuthenticationService, UserService, Profile,
    StudentService, CompaniesService
  ],
})
export class InternalsModule { }
