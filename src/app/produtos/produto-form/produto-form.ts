import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../produto-service';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './produto-form.html',
})
export class ProdutoForm {
  private readonly fb = inject(FormBuilder);
  private readonly produtoService = inject(ProdutoService);

  protected readonly produtoForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    descricao: ['', [Validators.required, Validators.minLength(20)]],
    categoria: ['', Validators.required],
    preco: [0, [Validators.required, Validators.min(1)]],
    estoque: [0, [Validators.required, Validators.min(0)]],
    imagem: [''],
  });

  protected salvarProduto(): void {
    if (this.produtoForm.invalid) return;

    const valor = this.produtoForm.getRawValue();

    console.log(this.produtoForm.value);
    this.produtoService.adicionar({
      id: Date.now(),
      nome: valor.nome!,
      descricao: valor.descricao!,
      categoria: valor.categoria!,
      preco: valor.preco!,
      estoque: valor.estoque!,
      imagem: valor.imagem ?? '',
    });
    this.produtoForm.reset();
  }
}
