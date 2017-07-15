import { Component }          from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Logo = 'ResearchHub';
  UserInfo = 'username';

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
