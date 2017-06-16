import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './config/app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { AppComponent }         from './components/app-header/app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { ResearchEditComponent }      from './components/research-edit/research-edit.component';
import { ResearchRatingComponent }  from './components/research-rating/research-rating.component';
import { ResearchService }          from './services/research.service';
import { ResearchSearchComponent }  from './components/research-search/research-search.component';
import { SearchService }          from './services/search.service';
import { ResearchExpandComponent }  from './components/research-expand/research-expand.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ResearchRatingComponent,
    ResearchEditComponent,
    ResearchSearchComponent,
    ResearchExpandComponent
  ],
  providers: [ ResearchService,
               SearchService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
