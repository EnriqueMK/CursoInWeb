import { Component } from '@angular/core';

@Component({
  selector: 'app-quem-somos',
  imports: [],
  templateUrl: './quem-somos.html',
  styleUrl: './quem-somos.css',
})
export class QuemSomos {
  voltarParaInicio() {
    document.getElementById("topo-site")?.scrollIntoView({ behavior: "smooth" });
  }
}
