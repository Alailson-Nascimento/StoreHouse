import { Component, computed, input, output } from '@angular/core';
import { Produto } from '../produto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produto-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './produto-card.html',
  styleUrl: './produto-card.scss',
})
export class ProdutoCard {
  readonly produto = input.required<Produto>();
  readonly adicionarAoCarrinho = output<Produto>();
  readonly avisarQuandoDisponivel = output<Produto>();

  protected readonly status = computed<'disponivel' | 'estoque-baixo' | 'sem-estoque'>(() => {
    const estoque = this.produto().estoque;
    if (estoque === 0) return 'sem-estoque';
    if (estoque <= 5) return 'estoque-baixo';
    return 'disponivel';
  });

  protected readonly precoExibido = computed(() => {
    const produto = this.produto();
    return produto.emPromocao && produto.precoPromocional
      ? produto.precoPromocional
      : produto.preco;
  });

  protected aoClicarAdicionar() {
    this.adicionarAoCarrinho.emit(this.produto());
  }

  protected aoClicarAvisar() {
    this.avisarQuandoDisponivel.emit(this.produto());
  }
}
