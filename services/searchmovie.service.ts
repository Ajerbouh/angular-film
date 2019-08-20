import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SearchmovieService {

    constructor(private http: HttpClient) {
    }

    search(title: string, year: number = 0) {
        const y = year ? `&y=${year}` : '';

        return this.http.get(`http://www.omdbapi.com/?t=${title}${y}&plot=full?i=tt3896198&apikey=44e4e2dd`);
    }
}
