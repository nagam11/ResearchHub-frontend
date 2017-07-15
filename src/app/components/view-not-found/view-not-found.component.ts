import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './view-not-found.component.html'
})
export class PageNotFoundComponent {
  imagePath: string = 'https://imgs.xkcd.com/comics/particle_properties.png';

  constructor (private http: Http) {
    this.loadImg();
  }

/*  loadImg(): string {
    let response = this.http.get('https://xkcd.com/info.0.json');
    console.log(response);
    return '';
  }*/

  loadImg() {
    this.http.get('https://xkcd.com/info.0.json')
      .map((response: Response) => {
        console.log(response);
        let comics = response.json();
        if (comics.img) {
          console.log(comics);
        }
      });
  }
}

