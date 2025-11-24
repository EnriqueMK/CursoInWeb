import { Component, OnInit } from '@angular/core';
import { Cursosfav } from '../../core/curso-favorito-service/cursosfav';
import { CommonModule } from '@angular/common';
import { Aluno } from '../../core/cadastrar-service/types';
import { Alunos } from '../../core/cadastrar-service/alunos';

@Component({
  selector: 'app-cursos-favoritos',
  imports: [CommonModule],
  templateUrl: './cursos-favoritos.html',
  styleUrls: ['./cursos-favoritos.css']
})
export class CursosFavoritos implements OnInit {
  listaCursos: string[] = []; 
  alunoLogado!: Aluno;
  idExcluir: number | null = null;

  constructor(
    private service: Cursosfav,
    private alunoService: Alunos
  ) {}

  ngOnInit(): void {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || '{}');

    if (!usuario.email) return;

    this.service.listar().subscribe(alunos => {
      const aluno = alunos.find(a => a.email === usuario.email);
      if (aluno) {
        this.alunoLogado = aluno;
        this.listaCursos = aluno.cursosFavoritos || [];
      }
    });
  }

  removerCurso(): void {
    if (this.idExcluir != null) {
      this.alunoService.excluir(this.idExcluir).subscribe({
        nex
      })
    }
  }
}
