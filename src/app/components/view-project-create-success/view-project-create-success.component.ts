import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  selector: 'project-create.success',
  templateUrl: './view-project-create-success.component.html',
  styleUrls: [ './view-project-create-success.component.css' ]
})
export class CreateProjectSuccessComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
}
