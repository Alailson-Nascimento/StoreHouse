import { Injectable, signal, computed } from '@angular/core';
import { Produto } from '../produtos/produto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private readonly itens = signal<Produto[]>([]);

  readonly itensCarrinho = this.itens.asReadonly();

  readonly totalItens = computed(() => this.itens().length);

  readonly totalPreco = computed(() =>
    this.itens().reduce((soma, produto) => soma + produto.preco, 0),
  );

  // não adiciona se não tiver estoque
  adicionarProduto(produto: Produto) {
    if (produto.estoque <= 0) {
      return;
    }
    this.itens.update((listaAtual) => [...listaAtual, produto]);
  }

  removerProduto(produtoId: number) {
    this.itens.update((listaAtual) => listaAtual.filter((produto) => produto.id !== produtoId));
  }

  limparCarrinho() {
    this.itens.set([]);
  }
}
