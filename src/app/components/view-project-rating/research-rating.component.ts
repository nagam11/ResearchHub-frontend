import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Research }        from '../../research';
import { ResearchService } from '../../services/research.service';
import { ProjectsService } from '../../services/projects.service';
import {Project} from '../../data-model/project';
@Component({
  selector: 'hero-detail',
  templateUrl: './research-rating.html',
  styleUrls: [ './research-rating.component.css' ]
})
export class ResearchRatingComponent implements OnInit {
  researches: Research;
  project: Project;
  constructor(
    private researchService: ResearchService,
    private ProjectsService: ProjectsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.ProjectsService.getProject(+params['id']))
      .subscribe(researches => this.project = researches);
  }
  save(): void {
    this.ProjectsService.update(this.project)
      .then(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
