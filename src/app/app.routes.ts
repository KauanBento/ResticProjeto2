import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

export const routes: Routes = [
    {
        path: '',
        component:  AppComponent,
        title: 'Loja Lorena Beauty'
    },
    {
        path: 'detalhes/:id',
        component: ProdutoDetalheComponent,
        title: 'Detalhes do produto'
    }
];
