/**
 * created by MarlaN. 07.07.2017
 */
import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions, } from '@angular/http';
import { Company } from '../data-model/company';
import { CompanyUser } from '../data-model/companyUser';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CompaniesService {
  private headers: Headers;
  private url = 'http://localhost:3000/api/companies';
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  getCompanies(): Promise<any> {
    return this.http.get(this.url).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  createRepresentative(companyUser: CompanyUser) {
    return this.http.post('http://localhost:3000/api/companyUsers/signup', companyUser).map((response: Response) => response.json());
  }
}

