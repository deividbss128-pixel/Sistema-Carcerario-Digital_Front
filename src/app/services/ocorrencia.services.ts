import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ocorrencia } from '../models/ocorrencia.model';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  // Endpoint configurado no seu OcorrenciaController do Spring Boot
  private apiUrl = 'http://localhost:8080/ocorrencias'; 

  constructor(private http: HttpClient) { }

  // GET - Listar todas as ocorrências
  listar(): Observable<Ocorrencia[]> {
    return this.http.get<Ocorrencia[]>(this.apiUrl);
  }

  // GET - Buscar uma ocorrência específica por ID
  buscarPorId(id: number): Observable<Ocorrencia> {
    return this.http.get<Ocorrencia>(`${this.apiUrl}/${id}`);
  }

  // POST - Salvar nova ocorrência
  inserir(ocorrencia: Ocorrencia): Observable<Ocorrencia> {
    return this.http.post<Ocorrencia>(this.apiUrl, ocorrencia);
  }

  // PUT - Atualizar registro existente
  alterar(id: number, ocorrencia: Ocorrencia): Observable<Ocorrencia> {
    return this.http.put<Ocorrencia>(`${this.apiUrl}/${id}`, ocorrencia);
  }

  // DELETE - Remover do banco
  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}