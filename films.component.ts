import {Component, OnInit} from '@angular/core';
import {Movie} from './intefaces/movie';

@Component({
    selector: 'app-films',
    templateUrl: './films.component.html',
    styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
    movies: Movie;

    constructor() {
    }

    ngOnInit() {
    }

    getMovies(moviesTab: Movie) {
        this.movies = moviesTab;
    }
}
