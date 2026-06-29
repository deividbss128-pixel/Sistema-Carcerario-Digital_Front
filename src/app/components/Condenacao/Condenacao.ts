import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondenacaoService } from '../../services/condenacao.services';
import { Condenacao } from '../../models/condenacao.model';

@Component({
  selector: 'app-condenacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Condenacao.html',
  styleUrl: './Condenacao.css'
})
export class CondenacaoComponent implements OnInit {

  // Lista que vai guardar as condenações vindas do Spring Boot
  listaCondenacoes: Condenacao[] = [];

  constructor(private condenacaoService: CondenacaoService) { }

  ngOnInit(): void {
    this.carregarCondenacoes();
  }

  carregarCondenacoes(): void {
    this.condenacaoService.listar().subscribe({
      next: (dados) => {
        this.listaCondenacoes = dados;
      },
      error: (erro: any) => { // <-- Corrigido aqui! Adicionado o tipo ": any"
        console.error('Erro ao buscar condenações:', erro);
        alert('Não foi possível conectar ao servidor do Spring Boot!');
      }
    });
  }
}