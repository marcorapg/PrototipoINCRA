import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Gestaoinadimplencia } from './pages/cobranca/gestaoinadimplencia/gestaoinadimplencia';
import { Visualizarcaso } from './pages/cobranca/gestaoinadimplencia/visualizarcaso/visualizarcaso';
import { Painelgerencial } from './pages/cobranca/gestaoinadimplencia/painelgerencial/painelgerencial';
import { Processamentolote } from './pages/cobranca/gestaoinadimplencia/processamentolote/processamentolote';
import { Gestaonotificacao } from './pages/centralnotificacoes/gestaonotificacao/gestaonotificacao';
import { Gestaotemplate } from './pages/centralnotificacoes/gestaotemplate/gestaotemplate';
import { Editartemplate } from './pages/centralnotificacoes/gestaotemplate/editartemplate/editartemplate';
import { Visualizarnotificacao } from './pages/centralnotificacoes/gestaonotificacao/visualizarnotificacao/visualizarnotificacao';
import { Gestaoenvio } from './pages/centralnotificacoes/gestaoenvio/gestaoenvio';
import { Visualizarenvio } from './pages/centralnotificacoes/gestaoenvio/visualizarenvio/visualizarenvio';
import { Centralnotificacoes } from './pages/centralnotificacoes/centralnotificacoes';
import { Obtencoes } from './pages/obtencoes/obtencoes';
import { Relatoriosobtencoes } from './pages/obtencoes/relatoriosobtencoes/relatoriosobtencoes';
import { Relatorioprocessoporobtencao } from './pages/obtencoes/relatoriosobtencoes/relatorioprocessoporobtencao/relatorioprocessoporobtencao';
import { Dashboardobtencao } from './pages/obtencoes/dashboardobtencao/dashboardobtencao';
import { Resultadoprocessoporobtencao } from './pages/obtencoes/relatoriosobtencoes/relatorioprocessoporobtencao/resultadoprocessoporobtencao/resultadoprocessoporobtencao';
import { Relatorioprocessoporfase } from './pages/obtencoes/relatoriosobtencoes/relatorioprocessoporfase/relatorioprocessoporfase';
import { Resultadoprocessoporfase } from './pages/obtencoes/relatoriosobtencoes/relatorioprocessoporfase/resultadoprocessoporfase/resultadoprocessoporfase';
import { Resultadofluxoorcamento } from './pages/obtencoes/relatoriosobtencoes/relatoriofluxoorcamento/resultadofluxoorcamento/resultadofluxoorcamento';
import { Relatoriofluxoorcamento } from './pages/obtencoes/relatoriosobtencoes/relatoriofluxoorcamento/relatoriofluxoorcamento';
import { Relatorioempenho } from './pages/obtencoes/relatoriosobtencoes/relatorioempenho/relatorioempenho';
import { Resultadoempenho } from './pages/obtencoes/relatoriosobtencoes/relatorioempenho/resultadoempenho/resultadoempenho';
import { Resultadoorcamentoadjudicacao } from './pages/obtencoes/relatoriosobtencoes/relatorioempenho/resultadoorcamentoadjudicacao/resultadoorcamentoadjudicacao';
import { Resultadoorcamentocompensacao } from './pages/obtencoes/relatoriosobtencoes/relatorioempenho/resultadoorcamentocompensacao/resultadoorcamentocompensacao';
import { Resultadofluxoorcamentoanalitico } from './pages/obtencoes/relatoriosobtencoes/relatoriofluxoorcamento/resultadofluxoorcamentoanalitico/resultadofluxoorcamentoanalitico';
import { Resultadorestosapagar } from './pages/obtencoes/relatoriosobtencoes/relatorioempenho/resultadorestosapagar/resultadorestosapagar';
import { Ofertaimovel } from './pages/obtencoes/ofertaimovel/ofertaimovel';
import { Formularioofertaimovel } from './pages/obtencoes/ofertaimovel/formularioofertaimovel/formularioofertaimovel';
import { Gestaoofertaimovel } from './pages/obtencoes/ofertaimovel/gestaoofertaimovel/gestaoofertaimovel';
import { Analisarofertaimovel } from './pages/obtencoes/ofertaimovel/gestaoofertaimovel/analisarofertaimovel/analisarofertaimovel';


export const routes: Routes = [
    { path: '', component: Home },

    //Cobrança
    { path: 'cobranca/gestaoinadimplencia', component: Gestaoinadimplencia },
    { path: 'cobranca/gestaoinadimplencia/visualizarcaso/:id', component: Visualizarcaso },
    { path: 'cobranca/gestaoinadimplencia/painelgerencial', component: Painelgerencial },
    { path: 'cobranca/gestaoinadimplencia/processamentolote', component: Processamentolote }, 

    //Central de notificações
    { path: 'centralnotificacoes', component: Centralnotificacoes }, 
    { path: 'centralnotificacoes/gestaonotificacao', component: Gestaonotificacao }, 
    { path: 'centralnotificacoes/gestaotemplate', component: Gestaotemplate },
    { path: 'centralnotificacoes/gestaotemplate/editartemplate', component: Editartemplate },
    { path: 'centralnotificacoes/gestaonotificacao/visualizarnotificacao', component: Visualizarnotificacao },
    { path: 'centralnotificacoes/gestaoenvio', component: Gestaoenvio }, 
    { path: 'centralnotificacoes/gestaoenvio/visualizarenvio', component: Visualizarenvio },

    //Obtenções
    { path: 'obtencoes', component: Obtencoes }, 
    { path: 'obtencoes/relatoriosobtencoes', component: Relatoriosobtencoes },
    { path: 'obtencoes/relatoriosobtencoes/relatorioprocessoporobtencao', component: Relatorioprocessoporobtencao },
    { path: 'obtencoes/relatoriosobtencoes/relatorioprocessoporobtencao/resultadoprocessoporobtencao', component: Resultadoprocessoporobtencao },
    { path: 'obtencoes/relatoriosobtencoes/relatorioprocessoporfase', component: Relatorioprocessoporfase },
    { path: 'obtencoes/relatoriosobtencoes/relatorioprocessoporfase/resultadoprocessoporfase', component: Resultadoprocessoporfase },
    { path: 'obtencoes/relatoriosobtencoes/relatoriofluxoorcamento', component: Relatoriofluxoorcamento },
    { path: 'obtencoes/relatoriosobtencoes/relatoriofluxoorcamento/resultadofluxoorcamento', component: Resultadofluxoorcamento },
    { path: 'obtencoes/relatoriosobtencoes/relatoriofluxoorcamento/resultadofluxoorcamentoanalitico', component: Resultadofluxoorcamentoanalitico },
    { path: 'obtencoes/relatoriosobtencoes/relatorioempenho', component: Relatorioempenho },
    { path: 'obtencoes/relatoriosobtencoes/relatorioempenho/resultadoempenho', component: Resultadoempenho },
    { path: 'obtencoes/relatoriosobtencoes/relatorioempenho/resultadorestosapagar', component: Resultadorestosapagar },
    { path: 'obtencoes/relatoriosobtencoes/relatorioempenho/resultadoorcamentoadjudicacao', component: Resultadoorcamentoadjudicacao },
    { path: 'obtencoes/relatoriosobtencoes/relatorioempenho/resultadoorcamentocompensacao', component: Resultadoorcamentocompensacao },
    { path: 'obtencoes/dashboardobtencao', component: Dashboardobtencao },
    { path: 'obtencoes/ofertaimovel', component: Ofertaimovel },
    { path: 'obtencoes/ofertaimovel/formularioofertaimovel', component: Formularioofertaimovel },
    { path: 'obtencoes/ofertaimovel/gestaoofertaimovel', component: Gestaoofertaimovel  },
    { path: 'obtencoes/ofertaimovel/gestaoofertaimovel/analisarofertaimovel', component: Analisarofertaimovel  }
];