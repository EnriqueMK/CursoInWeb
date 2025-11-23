import { Injectable } from '@angular/core';
import { Aluno } from './types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Alunos {
  private readonly API = 'http://localhost:3000/alunos';
  constructor(private http: HttpClient) {}

  cadastrar(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.API, aluno);
  }

  excluir(id: number): Observable<Aluno> {
    return this.http.delete<Aluno>(`${this.API}/${id}`);
  }

  editar(cliente: Aluno): Observable<Aluno> {
    const url = `${this.API}/${cliente.id}`
    return this.http.put<Aluno>(url, cliente)
  }

  getAlunoByEmail(email: string) {
    return this.http.get<Aluno[]>(`${this.API}?email=${email}`);
  }

  getAlunoByPassword(password: string) {
    return this.http.get<Aluno[]>(`${this.API}?email=${password}`);
  }
}
