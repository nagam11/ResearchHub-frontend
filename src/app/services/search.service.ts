import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Research }           from '../research';
@Injectable()
export class SearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Research[]> {
    return this.http
      .get(`app/researches/?id=${term}`)
      .map(response => response.json().data as Research[]);
  }
}
