/**
 * created by MarlaN. 13.06.2017
 */
/**
 * Modified by Moawiah. 08.07.2017
 */
import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Project} from '../data-model/project';

@Injectable()
export class ProjectsService {
  private headers: Headers;
  private url = 'http://localhost:3000/api/projects';
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getProjects(): Promise<any> {
    /*return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);*/
    return this.http.get(this.url).toPromise()
      .then(this.extractDataGet)
      .catch(this.handleError);
  }

  getProject(id: number): Promise<any> {
    const url = `${this.url}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(this.extractDataGet)
      .catch(this.handleError);
  }
  delete(id: any): Promise<void> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  create(project: any): Promise<any> {
    let options = new RequestOptions({ headers: this.headers });
    //let user = this.UserService.getCurrentUser(); TODO user services
    return this.http.post(this.url, project, options).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  update(project: Project): Promise<Project> {
    const url = `${this.url}/${project._id}`;
    console.log(url);
    return this.http
      .put(url, JSON.stringify(project), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Project)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  private extractDataGet(res: Response) {
    let body = res.json();
    return body;
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
