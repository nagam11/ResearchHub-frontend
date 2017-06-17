import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Chair } from '../chair';
@Injectable()
export class ResearchService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private researchesUrl = 'api/researches';  // URL to web api
  constructor(private http: Http) { }
  getChairs(): Promise<Chair[]> {
    return this.http.get(this.researchesUrl)
      .toPromise()
      .then(response => response.json().data as Chair[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
