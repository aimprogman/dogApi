import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'; // In angular5 i use HttpClient
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

  constructor(
    private http: Http,
    @Inject('api') private api) { }

  getByBreed(value: string) {
    return this.http.get(this.api + `breed/${value}/images/random`)
    .map(response => response.json())
    .catch((error: any) => { return Observable.throw(error); });
  }

  getList() {
    return this.http.get(this.api + "breeds/list").map(response => response.json());
  }

}
