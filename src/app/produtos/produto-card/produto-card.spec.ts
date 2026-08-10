import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProdutoCard } from './produto-card';

describe('ProdutoCard', () => {
  let component: ProdutoCard;
  let fixture: ComponentFixture<ProdutoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoCard);

    // 👇 precisa setar o input obrigatório antes do detectChanges
    fixture.componentRef.setInput('produto', {
      id: 1,
      nome: 'Produto Teste',
      descricao: 'Descrição de teste com mais de vinte caracteres',
      categoria: 'Ação',
      preco: 100,
      estoque: 10,
      imagem: 'https://via.placeholder.com/150',
    });

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
