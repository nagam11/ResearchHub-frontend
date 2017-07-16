/**
 * created by Moawiah. 10.06.2017
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ViewLoginComponent } from '../components/view-login/view-login.component';
import { ViewRegisterComponent } from '../components/view-register/view-register.component';
import { AuthGuard } from '../guard/guard';
// import { ViewLandingComponent } from '../components/view-landing/view-landing.component';
import { PageNotFoundComponent } from '../components/view-not-found/view-not-found.component';
import { ViewRegisterSelectorComponent } from '../components/view-register-sel/view-register-sel.component';
import { ViewRegisterStudentComponent } from '../components/view-register-student/view-register-student.component';
import { ViewRegisterAcademicComponent } from '../components/view-register-academic/view-register-academic.component';
import { ViewRegisterCompanyComponent } from '../components/view-register-company/view-register-company.component';
import { RegisterSuccessComponent } from '../components/view-register-sucess/view-register-success.component';
import { RegisterFailureComponent } from '../components/view-register-failure/view-register-failure.component';


const routes: Routes = [
  { path: 'app.html', redirectTo: 'login', pathMatch: 'prefix' },
  { path: 'login', component: ViewLoginComponent },
  { path: 'register', component: ViewRegisterSelectorComponent },
  { path: 'register/student', component: ViewRegisterStudentComponent },
  { path: 'register/academic', component: ViewRegisterAcademicComponent },
  { path: 'register/company', component: ViewRegisterCompanyComponent },
  { path: 'success', component: RegisterSuccessComponent },
  { path: 'failure', component: RegisterFailureComponent },
  { path: 'internals', loadChildren: './app/internals/internals.module#InternalsModule' },
  { path: '**', component: PageNotFoundComponent }
  /*
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
  */
];

@NgModule({
  imports: [ RouterModule.forRoot(
    routes,
    {
      // enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: PreloadAllModules
    }
  ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
