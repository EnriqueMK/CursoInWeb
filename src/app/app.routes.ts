import { Routes } from '@angular/router';
import { ConteudoInicial } from './conteudo-inicial/conteudo-inicial';
import { Cursos } from './subpages/cursos/cursos';
import { Footer } from './pages/footer/footer';
import { QuemSomos } from './subpages/quem-somos/quem-somos';
import { Login } from './subpages/login/login';
import { Matricule } from './subpages/matricule/matricule';
import { MeuPainel } from './subpages/meu-painel/meu-painel';
import { AlterarCadastro } from './subpages/alterar-cadastro/alterar-cadastro';
import { ExcluirCadastro } from './subpages/excluir-cadastro/excluir-cadastro';
import { CursosFavoritos } from './subpages/cursos-favoritos/cursos-favoritos';
import { Aulas } from './subpages/aulas/aulas';

export const routes: Routes = [
    { path: '', component: ConteudoInicial},
    { path: 'cursos', component: Cursos},
    { path: 'quem-somos', component: QuemSomos},
    { path: 'login', component: Login},
    { path: 'matricule', component: Matricule},
    { path: 'meu-painel', component: MeuPainel},
    { path: 'alterar-cadastro', component: AlterarCadastro},
    { path: 'excluir-cadastro', component: ExcluirCadastro},
    { path: 'cursos-favoritos', component: CursosFavoritos},
    { path: 'aulas/:id', component: Aulas},
    { path: 'footer', component: Footer, outlet: 'footer'}
];


