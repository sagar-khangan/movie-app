import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

import {Observable} from 'rxjs/Rx';
@Injectable()
export class MoviesService {

  constructor(private http:Http) { }

  getPage1Data(){
    return this.http.get('/data/CONTENTLISTINGPAGE-PAGE1.json')
  }
  getPage2Data(){
    return this.http.get('/data/CONTENTLISTINGPAGE-PAGE2.json')
  }
  getPage3Data(){
    return this.http.get('/data/CONTENTLISTINGPAGE-PAGE3.json')
  }
 }
  