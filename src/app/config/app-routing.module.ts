/**
 * created by Moawiah. 10.06.2017
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from '../components/view-rating-dashboard/view-rating-dashboard.component';
import { ResearchRatingComponent }  from '../components/view-project-rating/research-rating.component';
import {CreateProjectComponent} from '../components/view-project-create/view-project-create.component';
import {ViewProjectsComponent} from '../components/view-projects/view-projects.component';
import {CreateProjectSuccessComponent} from '../components/view-project-create-success/view-project-create-success.component';
import {ViewDashboardComponent} from '../components/view-dashboard/view-dashboard.component';
import {SearchProjectComponent} from '../components/view-project-search/view-project-search.component';
import {EditProjectComponent} from '../components/view-project-edit/view-project-edit.component';
import {CreateProjectRatingSuccessComponent} from '../components/view-project-rate-success/view-project-rate-success.component';
import {ViewProjectComponent} from '../components/view-project/view-project.component';

const routes: Routes = [
  { path: 'app.html', redirectTo: '/viewdashboard', pathMatch: 'prefix' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'rating/:id', component: ResearchRatingComponent },
  { path: 'createproject',     component: CreateProjectComponent },
  { path: 'projects',     component: ViewProjectsComponent },
  { path: 'createsuccess',     component: CreateProjectSuccessComponent },
  { path: 'viewdashboard',     component: ViewDashboardComponent },
  { path: 'searchproject',   component: SearchProjectComponent},
  { path: 'ratesuccess',   component: CreateProjectRatingSuccessComponent},
  { path: 'viewproject/:id',   component: ViewProjectComponent},
  { path: 'editproject/:id',   component: EditProjectComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
