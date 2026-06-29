import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcorrenciaService } from '../../services/ocorrencia.services';
import { Ocorrencia } from '../../models/ocorrencia.model';

@Component({
  selector: 'app-ocorrencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Ocorrencia.html',
  styleUrl: './Ocorrencia.css'
})
export class OcorrenciaComponent implements OnInit {

  listaOcorrencias: Ocorrencia[] = [];

  constructor(private ocorrenciaService: OcorrenciaService) { }

  ngOnInit(): void {
    this.carregarOcorrencias();
  }

  carregarOcorrencias(): void {
    this.ocorrenciaService.listar().subscribe({
      next: (dados) => {
        this.listaOcorrencias = dados;
      },
      error: (erro: any) => { // Tipado como any para evitar o erro TS7006
        console.error('Erro ao buscar ocorrências:', erro);
        alert('Não foi possível carregar as ocorrências do servidor!');
      }
    });
  }
}