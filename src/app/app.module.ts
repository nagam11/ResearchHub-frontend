import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './config/app-routing.module';

// Imports for loading & configuring the in-memory web api
// TODO delete in memory data service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import Components
import { AppComponent }         from './components/app-header/app.component';
import { DashboardComponent }   from './components/view-rating-dashboard/view-rating-dashboard.component';
import { ResearchRatingComponent }  from './components/view-project-rating/research-rating.component';
import { CreateProjectComponent }  from './components/view-project-create/view-project-create.component';
import { ViewProjectsComponent }  from './components/view-projects/view-projects.component';
import {CreateProjectSuccessComponent} from './components/view-project-create-success/view-project-create-success.component';
import {ViewDashboardComponent} from './components/view-dashboard/view-dashboard.component';
// import Services
import {ProjectsService} from './services/projects.service';
import {ChairsService} from './services/chairs.service';
import {FacultiesService} from './services/faculties.service';
import {ProjectTypeService} from './services/projectType.service';
import {SearchProjectComponent} from './components/view-project-search/view-project-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ResearchRatingComponent,
    CreateProjectComponent,
    ViewProjectsComponent,
    CreateProjectSuccessComponent,
    ViewDashboardComponent,
    SearchProjectComponent

  ],
  providers: [ ProjectsService,
                 ChairsService, FacultiesService, ProjectTypeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
