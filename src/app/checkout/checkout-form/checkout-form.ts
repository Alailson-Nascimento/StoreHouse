import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { cpfValidator } from '../valida-cpf';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout-form.html',
  styleUrl: './checkout-form.scss',
})
export class CheckoutForm {
  private readonly fb = new FormBuilder();

  protected readonly checkoutFormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    cpf: ['', [Validators.required, cpfValidator()]],
    email: ['', [Validators.required, Validators.email]],
    endereco: ['', [Validators.required, Validators.minLength(10)]],
    metodoPagamento: ['', Validators.required],
  });

  protected finalizarCompra() {
    if (this.checkoutFormGroup.invalid) {
      this.checkoutFormGroup.markAllAsTouched();
      return;
    }

    const pedido: Pedido = this.checkoutFormGroup.getRawValue() as Pedido;

    console.log('Pedido finalizado:', pedido);
    alert('Compra finalizada com sucesso! (simulação, sem backend)');
    this.checkoutFormGroup.reset();
  }
}
