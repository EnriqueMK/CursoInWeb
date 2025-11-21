import { Routes } from '@angular/router';
import { ConteudoInicial } from './conteudo-inicial/conteudo-inicial';
import { Cursos } from './subpages/cursos/cursos';
import { Footer } from './pages/footer/footer';
import { QuemSomos } from './subpages/quem-somos/quem-somos';
import { ValidarCertificado } from './subpages/validar-certificado/validar-certificado';
import { Login } from './subpages/login/login';
import { Matricule } from './subpages/matricule/matricule';

export const routes: Routes = [
    { path: '', component: ConteudoInicial},
    { path: 'cursos', component: Cursos},
    { path: 'quem-somos', component: QuemSomos},
    { path: 'validar-certificado', component: ValidarCertificado},
    { path: 'login', component: Login},
    { path: 'matricule', component: Matricule},
    { path: 'footer', component: Footer, outlet: 'footer'}
];



