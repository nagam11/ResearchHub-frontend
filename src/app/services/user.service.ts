import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../data-model/user';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

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
    return this.http.put('http://localhost:3000/api/students/update/' + user.id, user).map((response: Response) => {
      //if (response.json()) {
      //  localStorage.setItem('update', JSON.stringify(response.json()));
      //}
      return response;
    });
  }
}
