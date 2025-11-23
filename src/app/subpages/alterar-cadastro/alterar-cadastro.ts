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
  aluno: any = {}; // JSON
  alunoAtualizado: any = {}; // Formulario
 
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
  // 1️⃣ Verifica se senhaAtual foi digitada
    if (this.alunoAtualizado.senhaAtual) {
      if (this.alunoAtualizado.senhaAtual !== this.aluno.password) {
        alert("Senha atual incorreta!");
        return;
      }

      // 2️⃣ Verifica nova senha e confirmação
      if (this.alunoAtualizado.currentPassword && this.alunoAtualizado.newPasswordConfirm) {
        if (this.alunoAtualizado.currentPassword.length < 8 || this.alunoAtualizado.newPasswordConfirm.length < 8) {
          alert("Senhas devem ter no mínimo 8 caracteres");
          return;
        }

        if (this.alunoAtualizado.currentPassword !== this.alunoAtualizado.newPasswordConfirm) {
          alert("As novas senhas não coincidem");
          return;
        }

        // 3️⃣ Prepara objeto para enviar
        this.aluno.password = this.alunoAtualizado.currentPassword;
      } else {
        alert("Digite a nova senha e confirme");
        return;
      }
    }

    let dadosParaAtualizar: any; // declare fora

    this.alunoService.getAlunoByEmail(this.aluno.email).subscribe(() => {
      dadosParaAtualizar = {
        id: this.aluno.id,
        nome: this.aluno.nome,
        email: this.aluno.email,
        phone: this.aluno.phone,
        password: this.aluno.password
      };

      this.alunoService.editar(dadosParaAtualizar).subscribe(() => {
        console.log("Atualizado com sucesso!");
      });
    });
  }
}
