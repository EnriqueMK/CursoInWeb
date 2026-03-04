import { Injectable } from '@angular/core';
import { CursoFav } from './types';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cursosfav {
  private readonly API = 'http://localhost:3000/alunos';

  constructor(
    private http: HttpClient
  ) {}

  favoritar(email: string, curso: CursoFav): Observable<any> {
    return this.http.get<any[]>(`${this.API}?email=${email}`).pipe(
      switchMap(alunos => {
        const aluno = alunos[0];
        if (!aluno) throw new Error('Aluno não encontrado');

        aluno.cursosFavoritos = aluno.cursosFavoritos || [];
        if (!aluno.cursosFavoritos.includes(curso.nomeCurso)) {
          aluno.cursosFavoritos.push(curso.nomeCurso);
        }
        return this.http.put(`${this.API}/${aluno.id}`, aluno);
      })
    );
  }
  
  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  excluir(email: string, aluno: any): Observable<any> {
    return this.http.put(`${this.API}/${email}`, aluno);
  }

  getAlunoByEmail(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}?email=${email}`);
  }
}
