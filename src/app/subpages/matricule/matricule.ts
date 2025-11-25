import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Aluno } from '../../core/cadastrar-service/types';
import { Alunos } from '../../core/cadastrar-service/alunos';


@Component({
  selector: 'app-matricule',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './matricule.html',
  styleUrl: './matricule.css',
})
export class Matricule {
  aluno: Aluno = {} as Aluno;

  constructor(
    private service: Alunos,
  ) {}

  submeter() {
    if (this.aluno.nome === "" || this.aluno.email === "" || this.aluno.phone === "" || this.aluno.password === "" || this.aluno.passwordConfirm === "") {
      alert("Preencha os campos vazios");
      return;
    }

    if (this.aluno.nome.length < 3) {
      alert("O nome deve conter no mínimo 3 caractéres");
      return;
    }

    if (this.aluno.email.length < 5) {
      alert("O email deve conter o mínimo de caractéres")
      return;
    }

    if (this.aluno.phone.length < 10) {
      alert("O telefone deve conter no mínimo 9 caractéres");
      return;
    }

    if (this.aluno.password.length < 8) {
      alert("A senha deve conter no mínimo 8 caractéres")
    }

    if (this.aluno.passwordConfirm !== this.aluno.password) {
      alert("As sennha não se coincidem")
      return;
    }

    this.service.getAlunoByEmail(this.aluno.email).subscribe((alunosExistentes) => {
      if (alunosExistentes.length > 0) {
        alert("Este e-mail já está cadastrado!");
        return;
      } else if (localStorage.getItem('usuarioLogado') === null) {
        this.service.cadastrar(this.aluno).subscribe(() => {
          const usuarioLogado = {
            status: "true",
            nome: this.aluno.nome,
            email: this.aluno.email
          }
          localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
          alert("Sua conta foi cadastrada!")
          window.location.href = '#'
        });
      }
    })
  }
}
