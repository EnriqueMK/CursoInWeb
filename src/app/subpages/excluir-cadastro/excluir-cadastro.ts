import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { Alunos } from "../../core/cadastrar-service/alunos";

@Component({
  selector: 'app-excluir-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './excluir-cadastro.html',
  styleUrl: './excluir-cadastro.css',
})

export class ExcluirCadastro {
  emailExcluir: string | null = null;

  constructor(
    private aluno: Alunos,
    private router: Router
  ) {}

  excluirAluno(): void {
    const alunoLogado = JSON.parse(localStorage.getItem("usuarioLogado") || "null");

    if (!this.emailExcluir) {
      alert('Digite um e-mail válido');
      return;
    } 
    
    if (this.emailExcluir !== alunoLogado.email) {
      alert("Digite seu e-mail corretamente!")
      return;
    } 

    this.aluno.getAlunoByEmail(this.emailExcluir).subscribe({
      next: (lista) => {
        const aluno = lista[0];

        this.aluno.excluir(aluno.id!).subscribe({
          next: () => {
            localStorage.removeItem('usuarioLogado');
            alert('Conta excluida com sucesso!');
            window.location.reload();
            window.location.href = '#';
          },
          error: () => alert('Erro ao excluir a conta')
        });
      },
      error: () => alert('Erro ao buscar aluno')
    });
  }
}
