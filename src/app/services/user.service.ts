import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../data-model/user';
import {promise} from "selenium-webdriver";

@Injectable()
export class UserService {
  private headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getAll() {
    return this.http.get('http://localhost:3000/api/user/').map((response: Response) => response.json());
  }

  getById(_id: string) {
    return this.http.get('http://localhost:3000/api/user/' + _id).map((response: Response) => {
      localStorage.removeItem('profile');
      let user = response.json();
      if (user) {
        localStorage.setItem('profile', JSON.stringify(user));
      }
      return user;
    });
  }


  create(user: User) {
    return this.http.post('http://localhost:3000/api/user/signup', user).map((response: Response) => response.json());
  }

  update(user: any) {
    return this.http.put('http://localhost:3000/api/user/update/' + user.id, user).map((response: Response) => {
      // if (response.json()) {
      //  localStorage.setItem('update', JSON.stringify(response.json()));
      // }
      return response;
    });
  }

  updateUsersFavorit(user: any) {
    console.log('new user to updat: ' + JSON.stringify(user));
    /* return this.http.put('http://localhost:3000/api/user/update/' + user.id, user).map((response: Response) => {
     console.log(JSON.stringify(response));
     //if (response.json()) {
     //  localStorage.setItem('update', JSON.stringify(response.json()));
     //}
     return response;
     });
     } */
    return this.http
      .put('http://localhost:3000/api/user/update/' + user._id, JSON.stringify(user), {headers: this.headers})
      .toPromise();
  }

  findById(_id: string): Promise<User> {
    return this.http.get('http://localhost:3000/api/user/' + _id).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(response: Response) {

    return response.json();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
