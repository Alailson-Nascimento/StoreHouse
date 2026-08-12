import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutoService } from '../../produtos/produto-service';
import { Produto } from '../../produtos/produto';

@Component({
  selector: 'app-admin-produtos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-produtos.html',
  styleUrl: './admin-produtos.scss',
})
export class AdminProdutos {
  private readonly produtoService = inject(ProdutoService);

  protected readonly produtos = this.produtoService.obterProdutos();

  protected alternarOculto(produto: Produto) {
    this.produtoService.alternarOculto(produto.id);
  }

  protected alternarPromocao(produto: Produto) {
    if (produto.emPromocao) {
      this.produtoService.definirPromocao(produto.id, false, undefined);
      return;
    }

    const precoDigitado = prompt(
      `Preço promocional para "${produto.nome}" (preço atual: R$ ${produto.preco.toFixed(2)}):`,
    );

    const precoPromocional = Number(precoDigitado);

    if (!precoDigitado || isNaN(precoPromocional) || precoPromocional <= 0) {
      alert('Preço promocional inválido. Operação cancelada.');
      return;
    }

    this.produtoService.definirPromocao(produto.id, true, precoPromocional);
  }

  protected excluir(produto: Produto) {
    const confirmar = confirm(`Tem certeza que deseja excluir "${produto.nome}"?`);
    if (confirmar) {
      this.produtoService.excluir(produto.id);
    }
  }
}
