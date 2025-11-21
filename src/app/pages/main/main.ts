import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-main',
  imports: [RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  voltarParaInicio() {
    document.getElementById("topo-site")?.scrollIntoView({ behavior: "smooth" });
  }
}
