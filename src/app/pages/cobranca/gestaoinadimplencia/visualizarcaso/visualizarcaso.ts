import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { Linhatempo } from '../linhatempo/linhatempo';
import { RouterLink } from '@angular/router';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fase1 } from '../fase1/fase1';
import { Fase2 } from '../fase2/fase2';
import { Fase3 } from '../fase3/fase3';
import { Fase4 } from '../fase4/fase4';
import { Fase5 } from '../fase5/fase5';
import { CommonModule } from '@angular/common';
import { Gestaoinadimplenciaservice } from '../../../../services/cobranca/gestaoinadimplenciaservice';

@Component({
  selector: 'app-visualizarcaso',
  imports: [CommonModule, Breadcrumb, Linhatempo, RouterLink, Fase1, Fase2, Fase3, Fase4, Fase5],
  templateUrl: './visualizarcaso.html',
  styleUrl: './visualizarcaso.css',
})
export class Visualizarcaso {

  constructor(private db: Gestaoinadimplenciaservice, private route: ActivatedRoute) { }

  id: number = 1;
  fase?: number = 0;

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.fase = this.db.getById(this.id)?.fase;
  }

  onEtapaChange(novaEtapa: number) {
    this.fase = novaEtapa;
  }

  // no componente pai
  timeline = [
    {
      id: 1,
      titulo: '1ª Notificação',
      descricao: 'Emitir notificação concedendo 30 dias para pagamento ou defesa.',
      meta: 'Em andamento'
    },
    {
      id: 2,
      titulo: 'Prazo defesa/pagamento',
      descricao: 'Contagem 30 dias após o recebimento da notificação.',
      meta: 'Pendente'
    },
    {
      id: 3,
      titulo: 'Decisão administrativa',
      descricao: 'Chefe da SR/D prolata decisão sobre defesa ou reconhece crédito em favor do Incra.',
      meta: 'Pendente'
    },
    {
      id: 4,
      titulo: '2ª Notificação',
      descricao: 'Nova notificação concedendo 30 dias para pagamento ou recurso.',
      meta: 'Pendente'
    },
    {
      id: 5,
      titulo: 'Prazo defesa/pagamento',
      descricao: 'Contagem 30 dias após o recebimento da notificação.',
      meta: 'Pendente'
    },
    {
      id: 6,
      titulo: 'Recurso ao superintendente',
      descricao: 'Efeito suspensivo (prescrição). Análise técnica pela SR/O.',
      meta: 'Pendente'
    },
    {
      id: 7,
      titulo: 'Trânsito em julgado',
      descricao: 'Após esgotamento de instâncias. Dados congelados após emissão da certidão.',
      meta: 'Pendente'
    },
    {
      id: 8,
      titulo: 'Notificações finais',
      descricao: 'Notificação com prazo de 15 dias.',
      meta: 'Pendente'
    },
    {
      id: 9,
      titulo: 'Checklist final',
      descricao: 'Validação de todas etapas.',
      meta: 'Pendente'
    },
    {
      id: 10,
      titulo: 'Encaminhamentos para cadastro',
      descricao: 'Pré-cadastro PGF + Inscrição CADIN (DOC-2).',
      meta: 'Pendente'
    }
  ];
}