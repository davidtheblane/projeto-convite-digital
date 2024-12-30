import { Id, Senha } from "../../shared";
import { IEvent } from "../model/Event";
import validarEvento from "./validarEvento";

export default function complementarEvento(
  eventoParcial: Partial<IEvent>
): IEvent {
  const erros = validarEvento(eventoParcial);

  if (erros.length) {
    throw new Error(erros.join("\n"));
  }

  const evento: IEvent = {
    ...eventoParcial,
    id: eventoParcial.id ?? Id.novo(),
    password: eventoParcial.password ?? Senha.nova(20),
    expectedAudience: +(eventoParcial.expectedAudience ?? 1),
  } as IEvent;

  return evento;
}
