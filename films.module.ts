import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilmsComponent} from './films.component';
import {RouterModule} from '@angular/router';
import {SearchformComponent} from './searchform/searchform.component';
import {FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SearchmovieService} from './services/searchmovie.service';

@NgModule({
    declarations: [FilmsComponent, SearchformComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild([
            {path: 'films', component: FilmsComponent}
        ])
    ],
    providers: [
        FormBuilder,
        SearchmovieService
    ]
})
export class FilmsModule {
}
