import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Research }        from '../../research';
import { ResearchService } from '../../services/research.service';
@Component({
  selector: 'hero-detail',
  templateUrl: './research-rating.html',
  styleUrls: [ './research-rating.component.css' ]
})
export class ResearchRatingComponent implements OnInit {
  researches: Research;
  constructor(
    private researchService: ResearchService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.researchService.getResearch(+params['id']))
      .subscribe(researches => this.researches = researches);
  }
  save(): void {
    this.researchService.update(this.researches)
      .then(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
