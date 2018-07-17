import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/movies', pathMatch: 'full'},
  // { path: 'movies', component: MoviesComponent },
  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
