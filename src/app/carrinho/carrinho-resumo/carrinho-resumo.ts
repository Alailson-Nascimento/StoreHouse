import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarrinhoService } from '../carrinho-service';

@Component({
  selector: 'app-carrinho-resumo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carrinho-resumo.html',
  styleUrl: './carrinho-resumo.scss',
})
export class CarrinhoResumo {
  private readonly carrinhoService = inject(CarrinhoService);

  protected readonly itens = this.carrinhoService.itensCarrinho;
  protected readonly totalItens = this.carrinhoService.totalItens;
  protected readonly totalPreco = this.carrinhoService.totalPreco;

  protected aumentar(produtoId: number) {
    this.carrinhoService.aumentarQuantidade(produtoId);
  }

  protected diminuir(produtoId: number) {
    this.carrinhoService.diminuirQuantidade(produtoId);
  }

  protected removerItem(produtoId: number) {
    this.carrinhoService.removerProduto(produtoId);
  }

  protected limpar() {
    this.carrinhoService.limparCarrinho();
  }
}
