import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../services/moviedb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMoviesList: Array<object>;
  searchResults: any[];
  searchString: string;

  constructor(private movieService: MoviedbService) { }

  ngOnInit() {
    this.getPopular();
  }

  searchMovies() {
    if (!this.searchString) {
      return;
    }

    this.movieService.searchMovie(this.searchString)
      .subscribe(
        (movies: any) => {
            this.searchResults = movies.results;
            // console.log(this.searchResults);
        }
      );
  }

  getPopular() {
    this.movieService.getPopularMovies().subscribe((movies: any) => {
      this.popularMoviesList = movies.results;
      // console.log(this.popularMoviesList);
    });
  }

}
