import { Injectable, computed, signal } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly produtos = signal<Produto[]>([
    {
      id: 1,
      nome: 'Grand Theft Auto V',
      descricao: 'Mundo aberto, ação e crime organizado',
      categoria: 'Ação',
      preco: 89.9,
      imagem: 'img/gta.png',
      estoque: 10,
      oculto: false,
      emPromocao: false,
    },
    {
      id: 2,
      nome: 'Resident Evil 4',
      descricao: 'Survival horror com remake aclamado',
      categoria: 'Terror',
      preco: 149.9,
      imagem: 'img/resident-evil.png',
      estoque: 6,
      oculto: false,
      emPromocao: false,
    },
    {
      id: 3,
      nome: 'God of War Ragnarök',
      descricao: 'Kratos e Atreus na mitologia nórdica',
      categoria: 'Aventura',
      preco: 199.9,
      imagem: 'img/god-of-war-ragnarok.png',
      estoque: 0,
      oculto: false,
      emPromocao: false,
    },
    {
      id: 4,
      nome: 'Mortal Kombat 1',
      descricao: 'Luta com fatalities brutais',
      categoria: 'Luta',
      preco: 179.9,
      imagem: 'img/mortal-kombat.png',
      estoque: 8,
      oculto: false,
      emPromocao: false,
    },
    {
      id: 5,
      nome: 'Tomb Raider',
      descricao: 'Lara Croft em busca de artefatos perdidos',
      categoria: 'Aventura',
      preco: 69.9,
      imagem: 'img/tomb-raider.png',
      estoque: 4,
      oculto: false,
      emPromocao: false,
    },
    {
      id: 6,
      nome: 'The Last of Us Part II',
      descricao: 'Drama pós-apocalíptico premiado',
      categoria: 'Ação',
      preco: 159.9,
      imagem: 'img/the-last-of-us.png',
      estoque: 0,
      oculto: false,
      emPromocao: false,
    },
    {
      id: 7,
      nome: 'Elden Ring',
      descricao: 'RPG de mundo aberto brutalmente desafiador',
      categoria: 'RPG',
      preco: 229.9,
      imagem: 'img/elden-ring.png',
      estoque: 15,
      oculto: false,
      emPromocao: false,
    },
    {
      id: 8,
      nome: 'Cyberpunk 2077',
      descricao: 'Ação em mundo cyberpunk futurista',
      categoria: 'RPG',
      preco: 129.9,
      imagem: 'img/cyberpunk-2077.png',
      estoque: 2,
      oculto: false,
      emPromocao: false,
    },
    {
      id: 9,
      nome: 'Red Dead Redemption 2',
      descricao: 'Faroeste em mundo aberto épico',
      categoria: 'Ação',
      preco: 99.9,
      imagem: 'img/red-dead-2.png',
      estoque: 12,
      oculto: false,
      emPromocao: false,
    },
  ]);

  obterProdutos() {
    return this.produtos.asReadonly();
  }

  readonly produtosVisiveis = computed(() => this.produtos().filter((produto) => !produto.oculto));

  adicionar(produto: Produto) {
    this.produtos.update((lista) => [...lista, produto]);
  }

  editar(produtoId: number, dados: Partial<Produto>) {
    this.produtos.update((lista) =>
      lista.map((produto) => (produto.id === produtoId ? { ...produto, ...dados } : produto)),
    );
  }

  excluir(produtoId: number) {
    this.produtos.update((lista) => lista.filter((produto) => produto.id !== produtoId));
  }

  alternarOculto(produtoId: number) {
    this.produtos.update((lista) =>
      lista.map((produto) =>
        produto.id === produtoId ? { ...produto, oculto: !produto.oculto } : produto,
      ),
    );
  }

  definirPromocao(produtoId: number, emPromocao: boolean, precoPromocional?: number) {
    this.produtos.update((lista) =>
      lista.map((produto) =>
        produto.id === produtoId ? { ...produto, emPromocao, precoPromocional } : produto,
      ),
    );
  }
}
