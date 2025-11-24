import { Component, OnInit } from '@angular/core';
import { Cursosfav } from '../../core/curso-favorito-service/cursosfav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos-favoritos',
  imports: [CommonModule],
  templateUrl: './cursos-favoritos.html',
  styleUrls: ['./cursos-favoritos.css']
})
export class CursosFavoritos implements OnInit {
  listaCursos: string[] = []; 
  emailLogado: string = '';

  constructor(private cursosfav: Cursosfav) {}

  ngOnInit(): void {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || '{}');
    this.emailLogado = usuario?.email;

    this.cursosfav.listar().subscribe(res => {
      const aluno = res.find(a => a.email === this.emailLogado);
      if (aluno) {
        this.listaCursos = aluno.cursosFavoritos; 
      }
    });
  }
}
