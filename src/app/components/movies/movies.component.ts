import {Component, OnInit} from '@angular/core';

import {MoviedbService} from '../../services/moviedb.service';
import {Movies, MoviesResults} from '../../movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMoviesList: Array<MoviesResults>;
  searchResults: Array<MoviesResults>;
  searchString: string;

  constructor(private movieService: MoviedbService) {
  }

  ngOnInit() {
    this.getPopular();
  }

  searchMovies() {
    if (!this.searchString) {
      return;
    }

    this.movieService.searchMovie(this.searchString)
      .subscribe(
        (movies: Movies) => {
          this.searchResults = movies.results;
        }
      );
  }

  getPopular() {
    this.movieService.getPopularMovies()
      .subscribe((movies: Movies) => {
        this.popularMoviesList = movies.results;
        console.log(this.popularMoviesList);
      });
  }

}
