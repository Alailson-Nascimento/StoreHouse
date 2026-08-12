import { Injectable, signal, computed, effect } from '@angular/core';
import { Produto } from '../produtos/produto';

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

const CARRINHO_KEY = 'storehouse-carrinho';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private readonly itens = signal<ItemCarrinho[]>(this.carregarDoStorage());

  readonly itensCarrinho = this.itens.asReadonly();

  readonly totalItens = computed(() =>
    this.itens().reduce((soma, item) => soma + item.quantidade, 0),
  );

  readonly totalPreco = computed(() =>
    this.itens().reduce((soma, item) => soma + item.produto.preco * item.quantidade, 0),
  );

  constructor() {
    effect(() => {
      localStorage.setItem(CARRINHO_KEY, JSON.stringify(this.itens()));
    });
  }

  private carregarDoStorage(): ItemCarrinho[] {
    const salvo = localStorage.getItem(CARRINHO_KEY);
    return salvo ? JSON.parse(salvo) : [];
  }

  adicionarProduto(produto: Produto) {
    if (produto.estoque <= 0) {
      return;
    }

    this.itens.update((listaAtual) => {
      const itemExistente = listaAtual.find((item) => item.produto.id === produto.id);

      if (itemExistente) {
        if (itemExistente.quantidade >= produto.estoque) {
          return listaAtual;
        }
        return listaAtual.map((item) =>
          item.produto.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item,
        );
      }

      return [...listaAtual, { produto, quantidade: 1 }];
    });
  }

  aumentarQuantidade(produtoId: number) {
    this.itens.update((listaAtual) =>
      listaAtual.map((item) => {
        if (item.produto.id !== produtoId) return item;
        if (item.quantidade >= item.produto.estoque) return item;
        return { ...item, quantidade: item.quantidade + 1 };
      }),
    );
  }

  diminuirQuantidade(produtoId: number) {
    this.itens.update((listaAtual) =>
      listaAtual
        .map((item) =>
          item.produto.id === produtoId ? { ...item, quantidade: item.quantidade - 1 } : item,
        )
        .filter((item) => item.quantidade > 0),
    );
  }

  removerProduto(produtoId: number) {
    this.itens.update((listaAtual) => listaAtual.filter((item) => item.produto.id !== produtoId));
  }

  limparCarrinho() {
    this.itens.set([]);
  }
}
