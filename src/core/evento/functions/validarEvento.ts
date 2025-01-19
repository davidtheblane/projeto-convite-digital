import { IEvent } from "../model/Event";

export default function validarEvento(evento: Partial<IEvent>): string[] {
  const erros: string[] = [];

  if (!evento.alias) {
    erros.push("Alias é obrigatório");
  }

  if (!evento.name) {
    erros.push("Nome é obrigatório");
  }

  if (!evento.description) {
    erros.push("Descrição é obrigatória");
  }

  if (!evento.startDate) {
    erros.push("Data é obrigatória");
  }

  if (!evento.local) {
    erros.push("Local é obrigatório");
  }

  if (!evento.expectedAudience || evento.expectedAudience < 1) {
    erros.push("Público esperado é obrigatório");
  }

  if (!evento.image) {
    erros.push("Imagem é obrigatória");
  }

  if (!evento.imageBackground) {
    erros.push("Imagem de fundo é obrigatória");
  }

  if (evento.monetize && !evento.keyPix) {
    erros.push("Você escolheu receber pagamentos, a chave Pix é obrigatória");
  }
  return erros;
}
