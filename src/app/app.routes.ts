import { Routes } from '@angular/router';
import { ProdutosGrid } from './produtos/produtos-grid/produtos-grid';
import { ProdutoForm } from './produtos/produto-form/produto-form';
import { ProdutoDetalhes } from './produtos/produto-detalhes/produto-detalhes';

export const routes: Routes = [
  { path: '', component: ProdutosGrid },
  { path: 'produtos/novo', component: ProdutoForm },
  { path: 'produtos/:id', component: ProdutoDetalhes },
];
