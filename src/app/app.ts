import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ConteudoInicial } from "./conteudo-inicial/conteudo-inicial";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ConteudoInicial],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cursoinweb');
}
