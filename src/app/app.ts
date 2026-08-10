import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrinhoResumo } from './carrinho/carrinho-resumo/carrinho-resumo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarrinhoResumo],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
