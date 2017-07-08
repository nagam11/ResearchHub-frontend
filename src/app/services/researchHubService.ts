import {Injectable} from "@angular/core";
import {  Response, Headers, RequestOptions, } from '@angular/http';
/**
 * Created by Devgen on 19.06.2017.
 */


@Injectable()
export  class ResearchHubService {
  private headers: Headers;
  private urlApi = 'http://localhost:3000/api/';
  options: RequestOptions;
  constructor() {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  protected getUrlAp(): string {
    return this.urlApi;
  }

  protected  getHeaders() : Headers {
    return this.headers;
  }


  protected extractData(res: Response) {
    let body = res.json();
    //return body.data || {};
    return body;
  }
  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
