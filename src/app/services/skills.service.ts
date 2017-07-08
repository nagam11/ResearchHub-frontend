/**
 * created by MarlaN. 08.07.2017
 */

import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, Jsonp  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Project} from '../data-model/project';
import 'rxjs/add/operator/delay';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SkillsService {
  private headers: Headers;
  private url = 'http://localhost:3000/api/skills';
  options: RequestOptions;
  constructor(private http: Http, private jsonp: Jsonp) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  getSkills(): Promise<any> {
    return this.http.get(this.url).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  search(terms: Observable<string>, debounceMs=400) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawsearch(term)) //throw away previous observable & subscribe to next
  }

  rawsearch(term: string) {
    let search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    let obs =  this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
      .map(response => response.json()[1]);
    if (term.length === 2) {
      obs = obs.delay(100);
    } // simulate out of order response
    return obs;
  }
}
