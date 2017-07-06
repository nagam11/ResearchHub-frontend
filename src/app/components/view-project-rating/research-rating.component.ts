import 'rxjs/add/operator/switchMap';
import {Component, OnInit}      from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location}               from '@angular/common';
import {Research}        from '../../research';
import {ProjectsService} from '../../services/projects.service';
import {Project} from '../../data-model/project';
@Component({
  selector: 'hero-detail',
  templateUrl: './research-rating.html',
  styleUrls: ['./research-rating.component.css']
})
export class ResearchRatingComponent implements OnInit {
  researches: Research;
  project: Project;

  constructor(
              private ProjectsService: ProjectsService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => { this.ProjectsService.getProject(params['id']).then((project) => {
        this.project = project;
        console.log(this.project);
      });
  } );
}

  save(): void {
    this.ProjectsService.update(this.project)
      .then((project) => {
        this.project = project;
        console.log(this.project);
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }
}
