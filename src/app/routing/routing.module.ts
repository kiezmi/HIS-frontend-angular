import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [{
    path: '',
    component: LoginComponent,
}, {
    path: 'FilmList',
    component: FilmListComponent,
}, {
    path: 'films/:id',
    component: FilmDetailsComponent,
},
{
    path: 'SeriesList',
    component: SeriesListComponent,
},
{
    path: 'series/:id',
    component: SeriesDetailsComponent,
},
{ path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }