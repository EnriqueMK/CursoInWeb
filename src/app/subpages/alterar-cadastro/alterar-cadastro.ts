import { Component } from '@angular/core';
import { Alunos } from '../../core/cadastrar-service/alunos';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alterar-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alterar-cadastro.html',
  styleUrls: ['./alterar-cadastro.css'],
})
export class AlterarCadastro {
  aluno: any = {
    nome: '',
    email: '',
    phone: ''
  };

  constructor(
    private alunoService: Alunos,
    private router: Router
  ) {}
  
  ngOnInit() {
    const alunoLogado = JSON.parse(localStorage.getItem("usuarioLogado") || "null");
    if (alunoLogado?.email) {
      this.alunoService.getAlunoByEmail(alunoLogado.email).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.aluno = res[0];
          }
        },
        error: () => {
          console.error("Erro ao buscar aluno no JSON");
        }
      });
    }
  }

  salvarAlteracoes(): void {
    this.alunoService.getAlunoByEmail(this.aluno.email).subscribe(() => {
      if (this.aluno.nome === "" || this.aluno.email === "" || this.aluno.phone === "") {
        alert("Sem campos vazios!");
        return;
      } else if (this.aluno.nome.length < 3 || this.aluno.email.length < 5 || this.aluno.phone.length < 10 || this.aluno.password.length < 8) {
        alert("Preencha corretamente!");
        return;
      } else {
        if (this.aluno.)
      }
    })
  }
}
