import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ProdutosGrid } from './produtos-grid';

describe('ProdutosGrid', () => {
  let component: ProdutosGrid;
  let fixture: ComponentFixture<ProdutosGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosGrid],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutosGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
