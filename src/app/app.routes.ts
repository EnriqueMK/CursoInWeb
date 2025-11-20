import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Cursos } from './subpages/cursos/cursos';
import { Footer } from './pages/footer/footer';

export const routes: Routes = [
    { path: 'main', component: Main},
    { path: 'cursos', component: Cursos},
    { path: 'footer', component: Footer, outlet: 'footer'},
];


