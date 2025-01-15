import { Senha } from "../../shared";
import { IEvent } from "../model/Event";
import validarEvento from "./validarEvento";

export default function complementarEvento(eventoParcial: Partial<IEvent>): IEvent {
  console.log({ eventoParcial })
  const erros = validarEvento(eventoParcial);

  if (erros.length) throw new Error(erros.join("\n"));

  const evento: IEvent = {
    ...eventoParcial,
    password: eventoParcial.password ?? Senha.nova(10),
    expectedAudience: +(eventoParcial.expectedAudience ?? 1),
  } as IEvent;

  console.log('complementando evento')
  console.log({ evento })

  return evento;
}
