import { Component }          from '@angular/core';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  templateUrl: 'view-register-sel.component.html',
  styleUrls: [ './view-register-sel.component.css' ]
})
export class ViewRegisterSelectorComponent {
  Logo = 'ResearchHub';
  UserInfo = 'username';

  constructor(private router: Router) { }
}
