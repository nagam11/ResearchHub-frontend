/**
 * created by MarlaN. 07.07.2017
 */
import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions, } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AcademicsService {
  private headers: Headers;
  private url = 'http://localhost:3000/api/academics';
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  getAcademics(): Promise<any> {
    return this.http.get(this.url).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  update(academic: any): Promise<any> {
    const url = `${this.url}/${academic._id}`;
    return this.http
      .put(url, JSON.stringify(academic), {headers: this.headers})
      .toPromise()
      .then(() => academic)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

