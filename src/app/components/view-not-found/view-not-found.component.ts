import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './view-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {
  imagePath: string = 'https://imgs.xkcd.com/comics/screenshots.png';

  constructor (private http: Http) {
  }

  ngOnInit(): void {
    // this.getImg();
  }

  // TODO: 'Set Access-Control-Allow-Origin header to make it work'
  /*
  getImg() {
    this.loadImg()
      .subscribe(
        data => {
           this.imagePath = data.img;
        },
        error => {
          console.log('no comics');
        });
  }

  loadImg() {
    return this.http.get('https://xkcd.com/info.0.json')
      .map((response: Response) => {
        return response.json();
      });
  }*/
}

