import { Injectable } from '@angular/core';
import { Aluno } from './type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Alunos {
  private readonly API = 'http://localhost:3000/clientes';
  constructor(private http: HttpClient) {}

  // Faz um GET para listar todos os alunos.
  listar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.API);
  }

  //Faz um POST com um novo aluno para adicionar no banco de dados.
  incluir(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.API, aluno);
  }
}
