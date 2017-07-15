import { NgModule }             from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ViewLoginComponent } from '../components/view-login/view-login.component';
import { ViewRegisterComponent } from '../components/view-register/view-register.component';
import { AuthGuard } from '../guard/guard';
import { ViewLandingComponent } from '../components/view-landing/view-landing.component';
import { PageNotFoundComponent } from '../components/view-not-found/view-not-found.component';

const routes: Routes = [
  { path: '', component: ViewLandingComponent },
  { path: 'login', component: ViewLoginComponent },
  { path: 'register', component: ViewRegisterComponent },
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
