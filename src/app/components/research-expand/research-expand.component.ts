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
  selectedItem: String = 'Please select';
  constructor(
    private researchService: ResearchService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.researchService.getResearches().then(researches => this.researches = researches);
  }

  cancel(): void {
    console.log('My name is Marla');
    this.location.back();
  }

  save(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.researchService.create(title)
      .then(research => {
        this.researches.push(research);
        this.cancel();
      });

  }

  dropdownselected(research: Research): void {
    console.log('dropdown selected');
    this.selectedItem = research.ResearchTopic;
  }
}

