import { Component }          from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <div>
    <h1>{{Logo}} {{UserInfo}}</h1>
      <label>Search:</label>
    <input #searchBox id="search-box" (keyup)="search(searchBox.value)" />
    </div>
    
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/edit" routerLinkActive="active">Rating Summary</a>
      <a routerLink="/search" routerLinkActive="active">Rate based on Number</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Logo = 'ResearchHub';
  UserInfo = 'username';
}
