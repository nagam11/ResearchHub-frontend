import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from '../components/dashboard/dashboard.component';
import { ResearchRatingComponent }  from '../components/research-rating/research-rating.component';
import {ResearchEditComponent} from '../components/research-edit/research-edit.component';
import {ResearchSearchComponent} from '../components/research-search/research-search.component';
import {CreateProjectComponent} from '../components/view-project-create/view-project-create.component';
import {ViewProjectsComponent} from "../components/view-projects/view-projects.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'rating/:id', component: ResearchRatingComponent },
  { path: 'edit',     component: ResearchEditComponent },
  { path: 'search',     component: ResearchSearchComponent },
  { path: 'createproject',     component: CreateProjectComponent },
  { path: 'projects',     component: ViewProjectsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
