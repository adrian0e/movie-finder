import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {
  // apiUrl = 'https://api.themoviedb.org/4/';
  apiMovieSearch = 'https://api.themoviedb.org/3/search/movie';
  apiTvSearch = 'https://api.themoviedb.org/3/search/tv';
  apiMovieDiscover = 'https://api.themoviedb.org/3/discover/movie';
  apiMovieDetails = 'https://api.themoviedb.org/3/movie/';
  apiKey = 'e9a715ccb580018352698eabf2719eff';

  constructor(private http: HttpClient) {
  }

  getPopularMovies() {
    return this.http.get(this.apiMovieDiscover + '?api_key=' + this.apiKey + '&sort_by=popularity.desc');
  }

  searchMovie(searchString) {
    return this.http.get(this.apiMovieSearch + '?api_key=' + this.apiKey + '&query=' + searchString);
  }

  getMovieDetails(id) {
    return this.http.get(this.apiMovieDetails + id + '?api_key=' + this.apiKey);
  }

}
