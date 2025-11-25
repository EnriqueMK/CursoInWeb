import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-meu-painel',
  imports: [RouterLink],
  templateUrl: './meu-painel.html',
  styleUrl: './meu-painel.css',
})
export class MeuPainel {
  nome: string = '';

  ngOnInit() {
    const nomeUsuario = JSON.parse(localStorage.getItem("usuarioLogado") || '').nome;
    this.nome = nomeUsuario
  }
}
