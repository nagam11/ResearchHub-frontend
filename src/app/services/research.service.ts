import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Research } from '../research';
@Injectable()
export class ResearchService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private researchesUrl = 'api/researches';  // URL to web api
  constructor(private http: Http) { }
  getResearches(): Promise<Research[]> {
    return this.http.get(this.researchesUrl)
      .toPromise()
      .then(response => response.json().data as Research[])
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
  create(name: string): Promise<Research> {
    return this.http
      .post(this.researchesUrl, JSON.stringify({name: name}), {headers: this.headers})
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
