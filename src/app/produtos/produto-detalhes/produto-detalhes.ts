import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutoService } from '../produto-service';
import { CarrinhoService } from '../../carrinho/carrinho-service';

@Component({
  selector: 'app-produto-detalhes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './produto-detalhes.html',
  styleUrl: './produto-detalhes.scss',
})
export class ProdutoDetalhes {
  private readonly route = inject(ActivatedRoute);
  private readonly produtoService = inject(ProdutoService);
  private readonly carrinhoService = inject(CarrinhoService);

  protected readonly produtoId = Number(this.route.snapshot.paramMap.get('id'));
  protected readonly produto = this.produtoService
    .obterProdutos()()
    .find((p) => p.id === this.produtoId);

  protected comprar() {
    if (!this.produto || this.produto.estoque <= 0) {
      return;
    }
    this.carrinhoService.adicionarProduto(this.produto);
    alert(`"${this.produto.nome}" foi adicionado ao carrinho!`);
  }
}
