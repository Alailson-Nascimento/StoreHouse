import { Component, inject, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ProdutoCard } from '../produto-card/produto-card';
import { ProdutoService } from '../produto-service';
import { CarrinhoService } from '../../carrinho/carrinho-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produtos-grid',
  standalone: true,
  imports: [ProdutoCard, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './produtos-grid.html',
  styleUrl: './produtos-grid.scss',
})
export class ProdutosGrid {
  private readonly produtoService = inject(ProdutoService);
  private readonly carrinhoService = inject(CarrinhoService);

  protected readonly produtos = this.produtoService.produtosVisiveis;
  protected readonly pesquisaDigitada = signal('');

  protected readonly produtosFiltrados = computed(() => {
    const pesquisa = this.pesquisaDigitada().toLocaleLowerCase().trim();
    if (!pesquisa) return this.produtos();
    return this.produtos().filter(
      (produto) =>
        produto.nome.toLocaleLowerCase().includes(pesquisa) ||
        produto.descricao.toLocaleLowerCase().includes(pesquisa),
    );
  });

  protected aoAdicionarCarrinho(produto: Produto) {
    this.carrinhoService.adicionarProduto(produto);
  }

  protected aoAvisarQuandoDisponivel(produto: Produto) {
    alert(`Você será avisado quando "${produto.nome}" voltar ao estoque.`);
  }
}
