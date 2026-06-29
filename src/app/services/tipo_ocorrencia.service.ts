import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoOcorrencia } from '../models/tipo_ocorrencia.model';

@Injectable({
  providedIn: 'root'
})
export class TipoOcorrenciaService {

  // URL configurada no TipoOcorrenciaController do seu Java
  private apiUrl = 'http://localhost:8080/tipos-ocorrencia'; 

  constructor(private http: HttpClient) { }

  // GET - Listar todas as categorias/naturezas de ocorrências
  listar(): Observable<TipoOcorrencia[]> {
    return this.http.get<TipoOcorrencia[]>(this.apiUrl);
  }

  // GET - Buscar uma categoria específica por ID
  buscarPorId(id: number): Observable<TipoOcorrencia> {
    return this.http.get<TipoOcorrencia>(`${this.apiUrl}/${id}`);
  }

  // POST - Cadastrar um novo tipo de ocorrência
  inserir(tipo: TipoOcorrencia): Observable<TipoOcorrencia> {
    return this.http.post<TipoOcorrencia>(this.apiUrl, tipo);
  }

  // PUT - Alterar o nome de um tipo existente
  alterar(id: number, tipo: TipoOcorrencia): Observable<TipoOcorrencia> {
    return this.http.put<TipoOcorrencia>(`${this.apiUrl}/${id}`, tipo);
  }

  // DELETE - Excluir uma categoria
  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
