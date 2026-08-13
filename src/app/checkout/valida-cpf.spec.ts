import { AbstractControl } from '@angular/forms';
import { cpfValidator } from './valida-cpf';

function criarControl(valor: string): AbstractControl {
  return { value: valor } as AbstractControl;
}

describe('cpfValidator', () => {
  const validator = cpfValidator();

  it('aceita CPF vazio', () => {
    expect(validator(criarControl(''))).toBeNull();
  });

  it('aceita CPF válido', () => {
    expect(validator(criarControl('111.444.777-35'))).toBeNull();
  });

  it('aceita CPF válido sem formatação', () => {
    expect(validator(criarControl('11144477735'))).toBeNull();
  });

  it('rejeita CPF inválido', () => {
    expect(validator(criarControl('111.444.777-00'))).toEqual({ cpfInvalido: true });
  });

  it('rejeita números iguais', () => {
    expect(validator(criarControl('111.111.111-11'))).toEqual({ cpfInvalido: true });
  });

  it('rejeita CPF com poucos números', () => {
    expect(validator(criarControl('123.456.789'))).toEqual({ cpfInvalido: true });
  });

  it('rejeita CPF com muitos números', () => {
    expect(validator(criarControl('111.444.777-3599'))).toEqual({ cpfInvalido: true });
  });
});
