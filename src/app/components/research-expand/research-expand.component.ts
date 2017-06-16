import { Component, OnInit } from '@angular/core';
import { Research } from '../../research';
import { ResearchService } from '../../services/research.service';
import { Location }               from '@angular/common';

import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'create-project',
  templateUrl: './research-expand.component.html',
  styleUrls: [ './research-expand.component.css' ]
})
export class ResearchExpandComponent implements OnInit {
  researches: Research[] = [];
  constructor(
    private researchService: ResearchService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.researchService.getResearches()
      .then(researches => this.researches = researches);
  }

  cancel(): void {
    this.location.back();
  }

  save(): void {

    this.researchService.create(name)
      .then(research => {
        this.researches.push(research);
        this.cancel();
      });

  }
}

