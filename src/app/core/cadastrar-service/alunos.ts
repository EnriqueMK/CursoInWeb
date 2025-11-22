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

  getAlunoByEmail(email: string) {
    return this.http.get<Aluno[]>(`http://localhost:3000/alunos?email=${email}`);
  }
}
