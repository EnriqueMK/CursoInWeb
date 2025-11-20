import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ConteudoHeader } from "./conteudo-header/conteudo-header";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ConteudoHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cursoinweb');
}
