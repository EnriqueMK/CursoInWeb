import { CursoFav } from "../curso-favorito-service/types";

export interface Aluno {
    id?: number;
    nome: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirm: string;
    cursosFavoritos: CursoFav[]
}