import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Gestaoinadimplencia } from './pages/cobranca/gestaoinadimplencia/gestaoinadimplencia';
import { Visualizarcaso } from './pages/cobranca/gestaoinadimplencia/visualizarcaso/visualizarcaso';
import { Painelgerencial } from './pages/cobranca/gestaoinadimplencia/painelgerencial/painelgerencial';
import { Processamentolote } from './pages/cobranca/gestaoinadimplencia/processamentolote/processamentolote';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'cobranca/gestaoinadimplencia', component: Gestaoinadimplencia },
    { path: 'cobranca/gestaoinadimplencia/visualizarcaso/:id', component: Visualizarcaso },
    { path: 'cobranca/gestaoinadimplencia/painelgerencial', component: Painelgerencial },
    { path: 'cobranca/gestaoinadimplencia/processamentolote', component: Processamentolote }
];