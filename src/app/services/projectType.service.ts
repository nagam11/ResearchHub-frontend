import {Injectable} from "@angular/core";
import { Http } from '@angular/http';

import {ResearchHubService} from "./researchHubService";
import {ProjectType} from "../data-model/projectType";
/**
 * Created by Devgen on 19.06.2017.
 */


@Injectable()
export class ProjectTypeService extends ResearchHubService {
  private resource = 'projecttypes';
  // private headers: Headers;
  // private url = 'http://localhost:3000/api/projecttypes';
  // options: RequestOptions;
  constructor(private http: Http) {
    super();
    // this.headers = new Headers({ 'Content-Type': 'application/json' });
    // this.options = new RequestOptions({ headers: this.headers });
  }

getProjectTypes(): Promise<ProjectType[]> {
  return this.http.get(this.getUrlAp() + this.resource).toPromise()
    .then(this.extractData)
    .catch(this.handleError);

}

 /* private extractData(res: Response) {
    let body = res.json();
    //return body.data || {};
    return body;
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  } */


}
