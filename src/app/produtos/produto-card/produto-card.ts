// Component (decorator que transforma a classe em componente),
//  input (função pra declarar entradas)
//  e output (função pra declarar eventos que saem do componente).

import { Component, input, output } from '@angular/core';
import { Produto } from '../produto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produto-card',
  standalone: true, //
  imports: [RouterLink],
  templateUrl: './produto-card.html',
  styleUrl: './produto-card.scss',
})
export class ProdutoCard {
  // Cria a "porta de saída" desse componente — um evento que, quando disparado, carrega consigo um Produto.
  // É por aqui que o card vai avisar "usuário quer comprar isso

  readonly produto = input.required<Produto>();
  readonly adicionarAoCarrinho = output<Produto>();
  protected aoClicarAdicionar() {
    // método que vai rodar quando o botão "adicionar ao carrinho" for clicado no HTML. Ele emite (dispara) o evento adicionarAoCarrinho, mandando junto o produto atual (this.produto() — lê o valor de dentro do signal). protected significa que só esse componente e quem herdar dele podem chamar esse método
    this.adicionarAoCarrinho.emit(this.produto());
  }
}
