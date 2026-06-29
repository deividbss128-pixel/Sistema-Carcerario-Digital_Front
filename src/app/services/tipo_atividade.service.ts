import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoAtividade } from '../models/tipo_atividade.model';

@Injectable({
  providedIn: 'root'
})
export class TipoAtividadeService {

  // Endpoint configurado no @RequestMapping("/tipos-atividade") do seu Java
  private apiUrl = 'http://localhost:8080/tipos-atividade'; 

  constructor(private http: HttpClient) { }

  // GET - Listar todas as classificações de atividades
  listar(): Observable<TipoAtividade[]> {
    return this.http.get<TipoAtividade[]>(this.apiUrl);
  }

  // GET - Buscar um tipo específico por ID
  buscarPorId(id: number): Observable<TipoAtividade> {
    return this.http.get<TipoAtividade>(`${this.apiUrl}/${id}`);
  }

  // POST - Cadastrar um novo tipo de atividade
  inserir(tipo: TipoAtividade): Observable<TipoAtividade> {
    return this.http.post<TipoAtividade>(this.apiUrl, tipo);
  }

  // PUT - Alterar dados de um tipo existente
  alterar(id: number, tipo: TipoAtividade): Observable<TipoAtividade> {
    return this.http.put<TipoAtividade>(`${this.apiUrl}/${id}`, tipo);
  }

  // DELETE - Remover do sistema
  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
