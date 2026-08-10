import { Injectable, signal } from '@angular/core';
import { Produto } from './produto';
// Classe que pode ser injetada em qual quer componente da aplicação
@Injectable({
  providedIn: 'root',
})
// Crie uma propriedade chamada produtos, que só existe dentro dessa classe (private)
// que nunca vai ser trocada por outra coisa (readonly
// uma caixa reativa (signal) contendo especificamente um array de objetos do tipo Produto (<Produto[]>),
// já inicializada com essa lista de 9 jogos
// reandonly Impede que a variável receba outro valor
// O Signal é uma forma moderna do Angular guardar dados reativos.

// Sempre que a lista mudar, a tela será atualizada automaticamente
export class ProdutoService {
  listar() {
    throw new Error('Método não implementado');
  }
  adicionar(produto: Produto) {
    this.produtos.update((lista) => [...lista, produto]);
  }
  private readonly produtos = signal<Produto[]>([
    {
      id: 1,
      nome: 'Grand Theft Auto V',
      descricao: 'Mundo aberto, ação e crime organizado',
      categoria: 'Ação',
      preco: 89.9,
      imagem: 'img/gta.png',
      estoque: 10,
    },
    {
      id: 2,
      nome: 'Resident Evil 4',
      descricao: 'Survival horror com remake aclamado',
      categoria: 'Terror',
      preco: 149.9,
      imagem: 'img/resident-evil.png',
      estoque: 6,
    },
    {
      id: 3,
      nome: 'God of War Ragnarök',
      descricao: 'Kratos e Atreus na mitologia nórdica',
      categoria: 'Aventura',
      preco: 199.9,
      imagem: 'img/god-of-war-ragnarok.png',
      estoque: 0,
    },
    {
      id: 4,
      nome: 'Mortal Kombat 1',
      descricao: 'Luta com fatalities brutais',
      categoria: 'Luta',
      preco: 179.9,
      imagem: 'img/mortal-kombat.png',
      estoque: 8,
    },
    {
      id: 5,
      nome: 'Tomb Raider',
      descricao: 'Lara Croft em busca de artefatos perdidos',
      categoria: 'Aventura',
      preco: 69.9,
      imagem: 'img/tomb-raider.png',
      estoque: 4,
    },
    {
      id: 6,
      nome: 'The Last of Us Part II',
      descricao: 'Drama pós-apocalíptico premiado',
      categoria: 'Ação',
      preco: 159.9,
      imagem: 'img/the-last-of-us.png',
      estoque: 0,
    },
    {
      id: 7,
      nome: 'Elden Ring',
      descricao: 'RPG de mundo aberto brutalmente desafiador',
      categoria: 'RPG',
      preco: 229.9,
      imagem: 'img/elden-ring.png',
      estoque: 15,
    },
    {
      id: 8,
      nome: 'Cyberpunk 2077',
      descricao: 'Ação em mundo cyberpunk futurista',
      categoria: 'RPG',
      preco: 129.9,
      imagem: 'img/cyberpunk-2077.png',
      estoque: 2,
    },
    {
      id: 9,
      nome: 'Red Dead Redemption 2',
      descricao: 'Faroeste em mundo aberto épico',
      categoria: 'Ação',
      preco: 99.9,
      imagem: 'img/red-dead-2.png',
      estoque: 12,
    },
  ]);

  // método público que os componentes vão chamar pra pegar a lista
  // Serve para devolver a lista
  // Em vez de devolver o signal original, ele devolve uma versão somente para leitura
  obterProdutos() {
    return this.produtos.asReadonly();
  }
}
