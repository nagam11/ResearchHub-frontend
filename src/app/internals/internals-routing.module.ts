import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './components/view-rating-dashboard/view-rating-dashboard.component';
import { ResearchRatingComponent }  from './components/view-project-rating/research-rating.component';
import { CreateProjectComponent} from './components/view-project-create/view-project-create.component';
import { ViewProjectsComponent} from './components/view-projects/view-projects.component';
import { CreateProjectSuccessComponent} from './components/view-project-create-success/view-project-create-success.component';
import { ViewDashboardComponent } from './components/view-dashboard/view-dashboard.component';
import { SearchProjectComponent } from './components/view-project-search/view-project-search.component';
import { EditProjectComponent } from './components/view-project-edit/view-project-edit.component';
import { ViewSidebarComponent } from './components/view-sideboard/view-sidebar.component';
import { InternalsAppComponent } from './components/internals-home/internals-home.component';
import {CreateProjectRatingSuccessComponent} from './components/view-project-rate-success/view-project-rate-success.component';
import {ViewProjectComponent} from './components/view-project/view-project.component';
import { EditProfileComponent } from './components/view-edit-profile/view-edit-profile.component';
import { UpdateSuccessComponent } from './components/view-update-sucess/view-update-success.component';
import { UpdateFailureComponent } from './components/view-update-failure/view-update-failure.component';
import { AuthGuard } from '../guard/guard';

const internalsRoutes: Routes = [
  {
    path: '',
    component: InternalsAppComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'viewdashboard' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'rating/:id', component: ResearchRatingComponent },
          { path: 'createproject', component: CreateProjectComponent },
          { path: 'projects', component: ViewProjectsComponent },
          { path: 'createsuccess', component: CreateProjectSuccessComponent },
          { path: 'viewdashboard', component: ViewDashboardComponent },
          { path: 'searchproject', component: SearchProjectComponent },
          { path: 'editproject/:id', component: EditProjectComponent },
          { path: 'sidenav', component: ViewSidebarComponent, outlet: 'sidebar'},
          { path: 'editprofile', component: EditProfileComponent },
          { path: 'updatesuccess', component: UpdateSuccessComponent },
          { path: 'updatefailure', component: UpdateFailureComponent },
          { path: 'ratesuccess',   component: CreateProjectRatingSuccessComponent},
          { path: 'viewproject/:id',   component: ViewProjectComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(internalsRoutes) ],
  exports: [ RouterModule ]
})
export class InternalsRoutingModule {}
