import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoResumo } from './carrinho-resumo';

describe('CarrinhoResumo', () => {
  let component: CarrinhoResumo;
  let fixture: ComponentFixture<CarrinhoResumo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrinhoResumo],
    }).compileComponents();

    fixture = TestBed.createComponent(CarrinhoResumo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
