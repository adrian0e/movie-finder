import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {MoviedbService} from '../../services/moviedb.service';
import {Movie} from '../../movies.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id: number;
  movie: Movie;

  constructor(private movieService: MoviedbService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          }
        );

    this.movieService.getMovieDetails(this.id)
      .subscribe(
        (movie: Movie) => {
          this.movie = movie;
          console.log(this.movie);
        }
      );

  }

}
