/**
 * created by MarlaN. 18.06.2017
 */
import { Component, OnInit } from '@angular/core';
import { Research } from '../../research';
import {Chair} from '../../data-model/chair';
import {Faculty} from '../../data-model/faculty';
import {ProjectType} from '../../data-model/projectType';
import { ProjectsService } from '../../services/projects.service';
import { ChairsService } from '../../services/chairs.service';
import { FacultiesService } from '../../services/faculties.service';
import { Location }               from '@angular/common';

import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: [ './view-projects.component.css' ]
})
export class ViewProjectsComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
    console.log('Component created');
  }

}
