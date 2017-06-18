import { Injectable }    from '@angular/core';
import {  Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Research } from '../research';

@Injectable()
export class ResearchService {
  private headers: Headers;
  private researchesUrl = 'api/researches';  // URL to web api
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
  create(ResearchTopic: string): Promise<Research> {
    return this.http
      .post(this.researchesUrl, JSON.stringify({ResearchTopic: ResearchTopic}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Research)
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
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

