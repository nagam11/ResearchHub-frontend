import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './config/app-routing.module';

// Imports for loading & configuring the in-memory web api
// TODO delete in memory data service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
// import Components
import { AppComponent }         from './components/app-header/app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { ResearchEditComponent }      from './components/research-edit/research-edit.component';
import { ResearchRatingComponent }  from './components/research-rating/research-rating.component';
import { ResearchSearchComponent }  from './components/research-search/research-search.component';
import { CreateProjectComponent }  from './components/view-project-create/view-project-create.component';
import { ViewProjectsComponent }  from './components/view-projects/view-projects.component';
import {CreateProjectSuccessComponent} from './components/view-project-create-success/view-project-create-success.component';
import {ViewDashboardComponent} from './components/view-dashboard/view-dashboard.component';
// import Services
import { ResearchService }          from './services/research.service';
import {ProjectsService} from './services/projects.service';
import {ChairsService} from './services/chairs.service';
import {FacultiesService} from './services/faculties.service';
import { SearchService }          from './services/search.service';
import {ProjectTypeService} from "./services/projectType.service";
import {SearchProjectComponent} from "./components/view-project-search/view-project-search.component";
import {LanguageService} from "./services/languages.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService,{passThruUnknownUrl: true}),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ResearchRatingComponent,
    ResearchEditComponent,
    ResearchSearchComponent,
    CreateProjectComponent,
    ViewProjectsComponent,
    CreateProjectSuccessComponent,
    ViewDashboardComponent,
    SearchProjectComponent

  ],
  providers: [ ResearchService,
               SearchService, ProjectsService, ChairsService, FacultiesService, ProjectTypeService, LanguageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
