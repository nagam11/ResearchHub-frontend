import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Research }                from '../../research';
import { ResearchService }         from '../../services/research.service';
@Component({
  selector: 'my-heroes',
  templateUrl: './research-edit.component.html',
  styleUrls: [ './research-edit.component.css' ]
})
export class ResearchEditComponent implements OnInit {
  researches: Research[];
  selectedResearch: Research;
  constructor(
    private researchService: ResearchService,
    private router: Router) { }
  getResearches(): void {
    this.researchService
      .getResearches()
      .then(researches => this.researches = researches);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.researchService.create(name)
      .then(research => {
        this.researches.push(research);
        this.selectedResearch = null;
      });
  }
  delete(research: Research): void {
    this.researchService
      .delete(research.id)
      .then(() => {
        this.researches = this.researches.filter(h => h !== research);
        if (this.selectedResearch === research) { this.selectedResearch = null; }
      });
  }
  ngOnInit(): void {
    this.getResearches();
  }
  onSelect(research: Research): void {
    this.selectedResearch = research;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedResearch.id]);
  }
}
