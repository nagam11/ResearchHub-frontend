import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { SearchService } from '../../services/search.service';
import { Research } from '../../research';
@Component({
  selector: 'hero-search',
  templateUrl: './research-search.component.html',
  styleUrls: [ './research-search.component.css' ],
  providers: [SearchService]
})
export class ResearchSearchComponent implements OnInit {
  researches: Observable<Research[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private heroSearchService: SearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.researches = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Research[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Research[]>([]);
      });
  }
  gotoDetail(research: Research): void {
    let link = ['/rating', research.id];
    this.router.navigate(link);
  }
}
