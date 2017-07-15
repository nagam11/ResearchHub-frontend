import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  templateUrl: './view-update-success.component.html',
  styleUrls: [ './view-update-success.component.css' ]
})
export class UpdateSuccessComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
}
