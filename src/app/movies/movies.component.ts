import { Component, OnInit } from '@angular/core';
import {MoviesService} from './../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MoviesService]
})
export class MoviesComponent implements OnInit {

  page1 :any={};
  movieList :any=[];
  a :String="";
  constructor(private _movieService: MoviesService) { }

  getMovieList(){
  return this._movieService.getPage1Data()
    .map(
      (res) => {
        this.page1= res.json();
        this.movieList= this.page1['page']['content-items']['content'];
        this.movieList.forEach(element => {
          element['img']="/assets/images/"+element['poster-image'];
        });
     })   
  }

ngOnInit() {
  this.getMovieList().subscribe(_ => {;
});
}
}
