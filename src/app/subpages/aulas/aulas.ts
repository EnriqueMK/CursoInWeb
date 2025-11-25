import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aulas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aulas.html',
  styleUrls: ['./aulas.css']
})
export class Aulas {
  cursoSelecionado: string | null = null;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cursoSelecionado = params['id']; 
    });
  }
}
