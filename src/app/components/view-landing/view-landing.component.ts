import { Component }          from '@angular/core';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  templateUrl: 'view-landing.component.html'
})
export class ViewLandingComponent {
  Logo = 'ResearchHub';
  UserInfo = 'username';

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
