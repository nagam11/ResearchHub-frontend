import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../data-model/user';
import { Student } from '../data-model/student';

@Injectable()
export class StudentService {
  options: RequestOptions;
  private headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getAll() {
    return this.http.get('http://localhost:3000/api/user/').map((response: Response) => response.json());
  }

  /*
  getById(_id: string) {
    return this.http.get('http://localhost:3000/api/user/' + _id).map((response: Response) => {
      localStorage.removeItem('profile');
      let user = response.json();
      if (user) {
        localStorage.setItem('profile', JSON.stringify(user));
      }
      return user;
    });
  }*/

  getById(_id: string): Promise<any> {
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

  createStudent(student: Student) {
    return this.http.post('http://localhost:3000/api/students/signup', student).map((response: Response) => response.json());
  }

  updateStudent(student: any) {
    return this.http.put('http://localhost:3000/api/students/update/' + student.id, student).map((response: Response) => {
      //if (response.json()) {
      //  localStorage.setItem('update', JSON.stringify(response.json()));
      //}
      return response;
    });
  }

  putStudent(student: any) {
    console.log(student);
    return this.http
      .put('http://localhost:3000/api/students/update/' + student._id, JSON.stringify(student), {headers: this.headers})
      .toPromise();
  }
}
