import { Injectable } from '@angular/core';
import {Http, RequestOptions}       from '@angular/http';
import 'rxjs/add/operator/map';
import {ResearchHubService} from "./researchHubService";
import {Project} from "../data-model/project";
import {SearchCriteria} from "../data-model/searchCriteria";
@Injectable()
export class SearchService extends ResearchHubService {
  private resource = 'projects/search';
  constructor(private http: Http) {
    super();

  }
  searchForProjectsByCriteria(searchCriteria: SearchCriteria): Promise<any> {
    let options = new RequestOptions({ headers: this.getHeaders() });
    // let user = this.UserService.getCurrentUser(); TODO user services
    console.log(JSON.stringify(searchCriteria));
    return this.http.post(this.getUrlAp() + this.resource, searchCriteria, options).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }



}
