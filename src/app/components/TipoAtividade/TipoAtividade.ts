import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoAtividade } from '../../models/tipo_atividade.model';
import { TipoAtividadeService } from '../../services/tipo_atividade.service';

@Component({
  selector: 'app-tipo-atividade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './TipoAtividade.html',
  styleUrl: './TipoAtividade.css'
})
export class TipoAtividadeComponent implements OnInit {
  listaTipos: TipoAtividade[] = [];

  constructor(private tipoAtividadeService: TipoAtividadeService) {}

  ngOnInit(): void {
    this.carregarTipos();
  }

  carregarTipos(): void {
    this.tipoAtividadeService.listar().subscribe({
      next: (dados) => {
        this.listaTipos = dados;
      },
      error: (erro: unknown) => {
        console.error('Erro ao buscar tipos de atividade:', erro);
        alert('Nao foi possivel carregar os tipos de atividade do servidor!');
      }
    });
  }
}
