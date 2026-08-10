import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, ActivatedRoute } from '@angular/router';
import { ProdutoDetalhes } from './produto-detalhes';

describe('ProdutoDetalhes', () => {
  let component: ProdutoDetalhes;
  let fixture: ComponentFixture<ProdutoDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoDetalhes],
      providers: [
        provideRouter([]),
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoDetalhes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
