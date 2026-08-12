// molde
export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  categoria: string;
  preco: number;
  imagem: string;
  estoque: number;
  oculto: boolean;
  emPromocao: boolean;
  precoPromocional?: number;
}
