import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Condenacao } from '../models/condenacao.model';

@Injectable({
  providedIn: 'root'
})
export class CondenacaoService {

  // A URL que mapeaste no @RequestMapping("/condenacoes") do teu Java
  private apiUrl = 'http://localhost:8080/condenacoes'; 

  constructor(private http: HttpClient) { }

  // @GetMapping - Puxa a lista completa do banco
  listar(): Observable<Condenacao[]> {
    return this.http.get<Condenacao[]>(this.apiUrl);
  }

  // @GetMapping("/{id}") - Procura uma condenação específica pelo ID numérico
  buscarPorId(id: number): Observable<Condenacao> {
    return this.http.get<Condenacao>(`${this.apiUrl}/${id}`);
  }

  // @PostMapping - Envia os dados do formulário para salvar no banco
  inserir(condenacao: Condenacao): Observable<Condenacao> {
    return this.http.post<Condenacao>(this.apiUrl, condenacao);
  }

  // @PutMapping("/{id}") - Atualiza os dados de uma condenação existente
  alterar(id: number, condenacao: Condenacao): Observable<Condenacao> {
    return this.http.put<Condenacao>(`${this.apiUrl}/${id}`, condenacao);
  }

  // @DeleteMapping("/{id}") - Apaga o registo do banco
  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}