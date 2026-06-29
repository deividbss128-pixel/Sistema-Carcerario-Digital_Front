import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondenacaoComponent } from './components/Condenacao/Condenacao';
import { OcorrenciaComponent } from './components/Ocorrencia/ocorrencia';
import { TipoAtividadeComponent } from './components/TipoAtividade/TipoAtividade';

const routes: Routes = [
  { path: 'condenacoes', component: CondenacaoComponent },
  { path: 'ocorrencias', component: OcorrenciaComponent },
  { path: 'tipos-atividade', component: TipoAtividadeComponent },
  { path: '', redirectTo: 'ocorrencias', pathMatch: 'full' },
  { path: '**', redirectTo: 'ocorrencias' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
