import Convidado from "./Convidado";

export default interface Evento {
  id: string;
  alias: string;
  senha: string;
  nome: string;
  data: Date;
  local: string;
  endereco: string;
  descricao: string;
  chavePix: string;
  monetize: boolean;
  imagem: string;
  imagemBackground: string;
  publicoEsperado: number;
  convidados: Convidado[];
}
