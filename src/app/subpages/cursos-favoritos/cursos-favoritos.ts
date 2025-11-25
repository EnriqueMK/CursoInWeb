import { Component, OnInit } from '@angular/core';
import { Cursosfav } from '../../core/curso-favorito-service/cursosfav';
import { CommonModule } from '@angular/common';
import { Aluno } from '../../core/cadastrar-service/types';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-cursos-favoritos',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './cursos-favoritos.html',
  styleUrls: ['./cursos-favoritos.css']
})
export class CursosFavoritos implements OnInit {
  listaCursos: string[] = []; 
  alunoLogado!: Aluno;

  constructor(
    private service: Cursosfav
  ) {}

  ngOnInit(): void {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || '{}');

    if (!usuario.email) return;

    this.service.listar().subscribe(alunos => {
      const aluno = alunos.find(a => a.email === usuario.email);
      if (aluno) {
        this.listaCursos = aluno.cursosFavoritos || [];
      }
    });
  }

  removerCurso(curso: string) {
    const email = JSON.parse(localStorage.getItem("usuarioLogado") || '{}').email;

    this.service.getAlunoByEmail(email).subscribe((alunos) => {
      const aluno = alunos[0];
    
      if (!aluno) {
        console.error("Aluno não encontrado!");
        return;
      }

      const novosFavoritos = aluno.cursosFavoritos.filter(
        (c: string) => c !== curso
      );

      const alunoAtualizado = {
        ...aluno,
        cursosFavoritos: novosFavoritos
      };
      this.service.excluir(aluno.id, alunoAtualizado).subscribe(() => {
        alert("Curso removido com sucesso!");
        window.location.reload();
      });
    });
  }
}
