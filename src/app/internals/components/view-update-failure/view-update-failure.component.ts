import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  templateUrl: './view-update-failure.component.html',
  styleUrls: [ './view-update-failure.component.css' ]
})
export class UpdateFailureComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
}
