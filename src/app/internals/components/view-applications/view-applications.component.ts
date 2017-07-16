import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  selector: 'view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: [ './view-applications.component.css' ]
})
export class ViewApplicationsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
}
