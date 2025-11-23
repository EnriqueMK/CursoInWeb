import { Component } from '@angular/core';
import { Alunos } from '../../core/cadastrar-service/alunos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alterar-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alterar-cadastro.html',
  styleUrls: ['./alterar-cadastro.css'],
})
export class AlterarCadastro {
  aluno: any = {};

  constructor(
    private alunoService: Alunos,
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
    if (!this.aluno.nome || !this.aluno.email || !this.aluno.phone) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    if (this.aluno.nome.length < 3 || this.aluno.email.length < 5 || this.aluno.phone.length < 10 || this.aluno.password.length < 8) {
      alert("Preencha com o mínimo de caractéres")
      return;
    }

    if (this.aluno.senhaAtual) {
      if (this.aluno.currentPassword !== this.aluno.senhaAtual) {
        alert("Senha atual incorreta!");
        return;
      }
    }

    if (this.aluno.newPassword !== this.aluno.passwordConfirm) {
      alert("Nova senha e confirmação não coincidem!");
      return;
    }

    if (this.aluno.newPassword && this.aluno.newPassword.length < 8) {
      alert("Nova senha deve ter no mínimo 8 caracteres!");
      return;
    }

    this.alunoService.getAlunoByEmail(this.aluno.email).subscribe(() => {
      this.alunoService.editar(this.aluno).subscribe(() => {
        const usuarioLogado = {
          status: "true",
          email: this.aluno.email
        }
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
      })
    })
  }
}
