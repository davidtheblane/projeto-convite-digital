export default interface Convidado {
  id: number;
  nome: string;
  email: string;
  confirmado: boolean;
  possuiAcompanhantes: boolean;
  qtdeAcompanhantes: number;
}
