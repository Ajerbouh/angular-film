import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SearchmovieService} from '../services/searchmovie.service';
import {Movie} from '../intefaces/movie';

@Component({
    selector: 'app-searchform',
    templateUrl: './searchform.component.html',
    styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
    @Output() sendSearch = new EventEmitter<Movie>();
    searchForm: FormGroup;

    constructor(private searchService: SearchmovieService, private form: FormBuilder) {
        this.searchForm = form.group({
            title: '',
            year: '',
        });
    }

    ngOnInit() {
    }

    emitSearch(movie) {
        this.sendSearch.emit(movie);
    }

    startSearch() {
        this.searchService.search(this.searchForm.value.title, this.searchForm.value.year).subscribe((result) => this.emitSearch(result));

    }

}
