/**
 * created by Moawiah. 14.07.2017
 */

import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions, } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Rating} from '../data-model/Rating';

@Injectable()
export class RatingsService {
  private headers: Headers;
  private url = 'http://localhost:3000/api/ratings';
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  getRatings(): Promise<any> {
    return this.http.get(this.url).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    //return body.data || {};
    return body;
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  createRating(rating: any): Promise<any> {
    let options = new RequestOptions({ headers: this.headers });
    //let user = this.UserService.getCurrentUser(); TODO user services
    return this.http.post(this.url, rating, options).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  /*update(rating: Rating): Promise<Rating> {
    const url = `${this.url}/${rating._id}`;
    console.log(url);
    return this.http
      .put(url, JSON.stringify(rating), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Rating)
      .catch(this.handleError);
  }*/
}
