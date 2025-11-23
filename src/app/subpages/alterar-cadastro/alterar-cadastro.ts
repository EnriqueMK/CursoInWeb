import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Aluno } from '../../core/cadastrar-service/types';
import { Alunos } from '../../core/cadastrar-service/alunos';

@Component({
  selector: 'app-alterar-cadastro',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './alterar-cadastro.html',
  styleUrl: './alterar-cadastro.css',
})
export class AlterarCadastro {


  salvarAlteracoes() {

  }
}
