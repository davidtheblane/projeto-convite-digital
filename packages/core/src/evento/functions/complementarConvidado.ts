import { IGuest, IEventGuest } from "core";
import validarConvidado from "./validarConvidado";

export default function complementarConvidado(
  convidadoEvento: Partial<IEventGuest>,
  convidado: IGuest
): IEventGuest {
  const erros = validarConvidado(convidado);

  if (erros.length > 0) {
    throw new Error(erros.join("\n"));
  }

  const qtdeAcompanhantes = convidadoEvento.companions ?? 0;
  const temAcompanhantes =
    convidadoEvento.companions &&
    convidadoEvento.status === 'CONFIRMED' &&
    qtdeAcompanhantes > 0;

  const convidadoAtualizado = {
    ...convidadoEvento,
    qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
    possuiAcompanhantes: temAcompanhantes,
  };

  return convidadoAtualizado as IEventGuest;
}
