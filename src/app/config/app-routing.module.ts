/**
 * created by Moawiah. 10.06.2017
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ViewLoginComponent } from '../components/view-login/view-login.component';
import { AuthGuard } from '../guard/guard';
import { ViewLandingComponent } from '../components/view-landing/view-landing.component';
import { PageNotFoundComponent } from '../components/view-not-found/view-not-found.component';
import { ViewRegisterSelectorComponent } from '../components/view-register-sel/view-register-sel.component';
import { ViewRegisterStudentComponent } from '../components/view-register-student/view-register-student.component';
import { ViewRegisterAcademicComponent } from '../components/view-register-academic/view-register-academic.component';
import { ViewRegisterCompanyComponent } from '../components/view-register-company/view-register-company.component';
import { RegisterSuccessComponent } from '../components/view-register-sucess/view-register-success.component';
import { RegisterFailureComponent } from '../components/view-register-failure/view-register-failure.component';


const routes: Routes = [
  { path: '', component: ViewLandingComponent },
  { path: 'login', component: ViewLoginComponent },
  { path: 'register', component: ViewRegisterSelectorComponent },
  { path: 'register/student', component: ViewRegisterStudentComponent },
  { path: 'register/academic', component: ViewRegisterAcademicComponent },
  { path: 'register/company', component: ViewRegisterCompanyComponent },
  { path: 'success', component: RegisterSuccessComponent },
  { path: 'failure', component: RegisterFailureComponent },
  { path: 'internals', loadChildren: './app/internals/internals.module#InternalsModule' },
  { path: '**', component: PageNotFoundComponent }
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
