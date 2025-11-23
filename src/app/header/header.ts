import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  usuarioLogado: boolean = false;

  ngOnInit() {
    const usuarioDados =  JSON.parse(localStorage.getItem('usuarioLogado') || '{}');
    if (usuarioDados.status === 'true') {
      this.usuarioLogado = true;
    }
  }

  logout() {
    localStorage.removeItem('usuarioLogado');
    alert("Conta deslogada!");
    window.location.reload();
    window.location.href = '#';
  }
}
