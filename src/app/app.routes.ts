import { Routes } from '@angular/router';
import { ProdutosGrid } from './produtos/produtos-grid/produtos-grid';
import { ProdutoForm } from './produtos/produto-form/produto-form';
import { ProdutoDetalhes } from './produtos/produto-detalhes/produto-detalhes';
import { CarrinhoResumo } from './carrinho/carrinho-resumo/carrinho-resumo';
import { CheckoutForm } from './checkout/checkout-form/checkout-form';
import { AdminProdutos } from './admin/admin-produtos/admin-produtos';

export const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProdutosGrid },
  { path: 'produtos/novo', component: ProdutoForm },
  { path: 'produtos/:id', component: ProdutoDetalhes },
  { path: 'carrinho', component: CarrinhoResumo },
  { path: 'checkout', component: CheckoutForm },
  { path: 'admin', component: AdminProdutos },
  { path: 'produtos/editar/:id', component: ProdutoForm },
];
