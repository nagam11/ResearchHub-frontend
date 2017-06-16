import { Component, OnInit } from '@angular/core';
import { Research } from '../../research';
import { ResearchService } from '../../services/research.service';


import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
})
export class DashboardComponent implements OnInit {
  researches: Research[] = [];
  constructor(private ResearchService: ResearchService) { }
  ngOnInit(): void {
    this.ResearchService.getResearches()
      .then(researches => this.researches = researches);
  }
}

