/**
 * created by MarlaN. 13.06.2017
 */
import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Research } from '../research';

@Injectable()
export class ProjectsService {
  private headers: Headers;
  private researchesUrl = 'http://localhost:3002/api/projects';
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getResearches(): Promise<any> {
    return this.http.get(this.researchesUrl)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  getResearch(id: number): Promise<Research> {
    const url = `${this.researchesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Research)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.researchesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  create(project): Promise<any> {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.researchesUrl, project, options).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  update(research: Research): Promise<Research> {
    const url = `${this.researchesUrl}/${research.id}`;
    return this.http
      .put(url, JSON.stringify(research), {headers: this.headers})
      .toPromise()
      .then(() => research)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

