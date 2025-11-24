import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Aluno } from '../../core/cadastrar-service/types';
import { Alunos } from '../../core/cadastrar-service/alunos';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  titulo = 'Login dos Alunos';
  aluno: Aluno = {} as Aluno;

  constructor(
    private service: Alunos,
  ) {}
  
  verificarLogin() {
    if (localStorage.getItem('usuarioLogado') === null) {
      this.service.getAlunoByEmail(this.aluno.email).subscribe((alunos) => {
        if (this.aluno.email === "" || this.aluno.password === "") {
          alert("Preencha os campos vazios");
          return;
        }

        if (this.aluno.email.length < 5) {
          alert("O email deve conter o mínimo de caractéres");
          return;
        }
        if (this.aluno.password.length < 8) {
          alert("A senha deve conter no mínimo 8 caractéres");
          return;
        }
        if (alunos.length === 0) {
          alert("Email não cadastrado");
          return;
        } else {
          const aluno = alunos[0];
          if (aluno.password !== this.aluno.password) {
            alert("Senha Incorreta");
            return;
          } else {
            const usuarioLogado = {
              status: "true",
              email: this.aluno.email
            }
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
            alert("Login realizado com sucesso!")
            window.location.href = '#'
          }
        }
      })
    }
  }
}
