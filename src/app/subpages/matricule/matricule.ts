import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Aluno } from '../../core/cadastrar-service/types';
import { Alunos } from '../../core/cadastrar-service/alunos';
import { Router } from '@angular/router';


@Component({
  selector: 'app-matricule',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './matricule.html',
  styleUrl: './matricule.css',
})
export class Matricule {
  titulo = 'Cadastro de Alunos';
  aluno: Aluno = {} as Aluno;

  constructor(
    private service: Alunos,
    private router: Router
  ) {}

  submeter() {
    if (this.aluno.nome.length < 3 || this.aluno.email.length < 5 || this.aluno.phone.length < 10 || this.aluno.password.length < 8) {
      return;
    }

    if (this.aluno.password !== this.aluno.passwordConfirm) {
      return;
    }

    this.service.getAlunoByEmail(this.aluno.email).subscribe((alunosExistentes) => {
      if (alunosExistentes.length > 0) {
        alert("Este e-mail já está cadastrado!");
        return;
      } else if (localStorage.getItem('usuarioLogado') === null) {
        this.service.cadastrar(this.aluno).subscribe(() => {
          localStorage.setItem('usuarioLogado', 'true');
          this.aluno = {
            nome: '',
            email: '',
            phone: '',
            password: '',
            passwordConfirm: ''
          };
          alert("Sua conta foi cadastrada!")
          window.location.href = '#'
        });
      }
    })
  }
}
