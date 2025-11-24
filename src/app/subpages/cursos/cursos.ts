import { Component } from '@angular/core';
import { Cursosfav } from '../../core/curso-favorito-service/cursosfav';
import { CursoFav } from '../../core/curso-favorito-service/types';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.html',
  styleUrls: ['./cursos.css']
})
export class Cursos {
  emailAluno = JSON.parse(localStorage.getItem("usuarioLogado") || '{}').email;
  cursosFavoritos: CursoFav[] = [];

  constructor(private cursosFavService: Cursosfav) {}

  favoritarCurso(nomeCurso: string) {
    const curso: CursoFav = { nomeCurso };

    this.cursosFavService.favoritar(this.emailAluno, curso)
      .subscribe(() => {
        this.cursosFavoritos.push(curso);
        alert("Curso " + curso.nomeCurso + " Favoritado!")
      });
  }
}
