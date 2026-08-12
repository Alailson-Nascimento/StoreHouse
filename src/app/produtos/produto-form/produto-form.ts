import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto-service';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './produto-form.html',
  styleUrl: './produto-form.scss',
})
export class ProdutoForm implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly produtoService = inject(ProdutoService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private produtoIdEmEdicao: number | null = null;

  protected readonly produtoForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    descricao: ['', [Validators.required, Validators.minLength(20)]],
    categoria: ['', Validators.required],
    preco: [0, [Validators.required, Validators.min(1)]],
    estoque: [0, [Validators.required, Validators.min(0)]],
    imagem: [''],
  });

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (!idParam) return;

    const id = Number(idParam);
    const produto = this.produtoService
      .obterProdutos()()
      .find((p) => p.id === id);

    if (!produto) return;

    this.produtoIdEmEdicao = produto.id;
    this.produtoForm.patchValue({
      nome: produto.nome,
      descricao: produto.descricao,
      categoria: produto.categoria,
      preco: produto.preco,
      estoque: produto.estoque,
      imagem: produto.imagem,
    });
  }

  protected salvarProduto(): void {
    if (this.produtoForm.invalid) return;

    const valor = this.produtoForm.getRawValue();

    if (this.produtoIdEmEdicao !== null) {
      this.produtoService.editar(this.produtoIdEmEdicao, {
        nome: valor.nome!,
        descricao: valor.descricao!,
        categoria: valor.categoria!,
        preco: valor.preco!,
        estoque: valor.estoque!,
        imagem: valor.imagem ?? '',
      });
    } else {
      this.produtoService.adicionar({
        id: Date.now(),
        nome: valor.nome!,
        descricao: valor.descricao!,
        categoria: valor.categoria!,
        preco: valor.preco!,
        estoque: valor.estoque!,
        imagem: valor.imagem ?? '',
        oculto: false,
        emPromocao: false,
      });
    }

    this.router.navigateByUrl('/admin');
  }
}
