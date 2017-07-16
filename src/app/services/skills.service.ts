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
  private url = 'http://localhost:3000/api/skills/terms/';
  options: RequestOptions;
  constructor(private http: Http, private jsonp: Jsonp) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  getAllSkills(): Promise<any> {
    return this.http.get('http://localhost:3000/api/skills/').toPromise()
      .then(this.extractData)
      .catch(this.handleError);
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

  search(terms: Observable<string>, debounceMs = 400 ) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawsearch(term));
  }
  rawsearch(terms: string) {
       return this.http.get(this.url + terms).toPromise()
         .then(this.extractData)
         .catch(this.handleError);
  }
}
