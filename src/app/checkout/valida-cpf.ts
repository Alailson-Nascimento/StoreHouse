import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = (control.value ?? '').replace(/\D/g, '');

    if (!valor) {
      return null;
    }

    if (valor.length !== 11 || /^(\d)\1{10}$/.test(valor)) {
      return { cpfInvalido: true };
    }

    const digitos = valor.split('').map(Number);

    const calcularDigito = (ate: number): number => {
      let soma = 0;
      let peso = ate + 1;
      for (let i = 0; i < ate; i++) {
        soma += digitos[i] * peso;
        peso--;
      }
      const resto = (soma * 10) % 11;
      return resto === 10 ? 0 : resto;
    };

    const digito1 = calcularDigito(9);
    const digito2 = calcularDigito(10);

    const valido = digito1 === digitos[9] && digito2 === digitos[10];

    return valido ? null : { cpfInvalido: true };
  };
}
