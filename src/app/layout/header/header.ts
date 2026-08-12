import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CarrinhoService } from '../../carrinho/carrinho-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly carrinhoService = inject(CarrinhoService);

  protected readonly totalItens = this.carrinhoService.totalItens;
  protected readonly menuAberto = signal(false);

  protected alternarMenu() {
    this.menuAberto.update((aberto) => !aberto);
  }

  protected fecharMenu() {
    this.menuAberto.set(false);
  }
}
