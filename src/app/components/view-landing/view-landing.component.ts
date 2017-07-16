import { Component }          from '@angular/core';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  templateUrl: 'view-landing.component.html',
  styleUrls: [ './style.css', './style-medium.css', './style-small.css',
    'style-xlarge.css', './style-xsmall.css' ]
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
