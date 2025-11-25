import { Component } from '@angular/core';
import { Alunos } from '../../core/cadastrar-service/alunos';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-alterar-cadastro',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './alterar-cadastro.html',
  styleUrls: ['./alterar-cadastro.css'],
})
export class AlterarCadastro {
  aluno: any = {}; 
  alunoAtualizado: any = {}; 
 
  constructor(
    private alunoService: Alunos,
  ) {}

  ngOnInit() {
    const alunoLogado = JSON.parse(localStorage.getItem("usuarioLogado") || "null");
    if (alunoLogado.email) {
      this.alunoService.getAlunoByEmail(alunoLogado.email).subscribe({
        next: (res) => {
          if (res.length > 0) {
            this.aluno = res[0]
          }
        },
        error: () => {
          console.error("Erro ao buscar aluno no JSON");
        }
      });
    }
  }

  salvarAlteracoes() {
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
    
    if (this.alunoAtualizado.senhaAtual) {
      if (this.alunoAtualizado.senhaAtual !== this.aluno.password) {
        alert("Senha atual incorreta!");
        return;
      }

      if (this.alunoAtualizado.currentPassword && this.alunoAtualizado.newPasswordConfirm) {
        if (this.alunoAtualizado.currentPassword.length < 8 || this.alunoAtualizado.newPasswordConfirm.length < 8) {
          alert("Senhas devem ter no mínimo 8 caracteres");
          return;
        }

        if (this.alunoAtualizado.currentPassword !== this.alunoAtualizado.newPasswordConfirm) {
          alert("As novas senhas não coincidem");
          return;
        }

        this.aluno.password = this.alunoAtualizado.currentPassword;
      } else {
        alert("Digite a nova senha e a confirmar senha");
        return;
      }
    }

    let dadosParaAtualizar: any;

    this.alunoService.getAlunoByEmail(this.aluno.email).subscribe(() => {
      dadosParaAtualizar = {
        id: this.aluno.id,
        nome: this.aluno.nome,
        email: this.aluno.email,
        phone: this.aluno.phone,
        password: this.aluno.password,
        passwordConfirm: this.aluno.password
      };

      this.alunoService.editar(dadosParaAtualizar).subscribe(() => {
        const usuarioLogado = {
          status: "true",
          email: this.aluno.email
        }
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
        alert("Cadastrado com Sucesso!");
        window.location.reload();
      });
    });
  }
}
