import { Component } from '@angular/core';
import { Main } from "../pages/main/main";
import { CommonModule } from '@angular/common';
import { Footer } from "../pages/footer/footer";


@Component({
  selector: 'app-conteudo-inicial',
  imports: [CommonModule, Main, Footer],
  templateUrl: './conteudo-inicial.html',
  styleUrl: './conteudo-inicial.css',
})
export class ConteudoInicial {
  mostrarMain = false;
}


