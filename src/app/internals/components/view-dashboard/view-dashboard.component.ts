import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  selector: 'project-create.success',
  templateUrl: './view-dashboard.component.html',
  styleUrls: [ './view-dashboard.component.css' ]
})
export class ViewDashboardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
}
