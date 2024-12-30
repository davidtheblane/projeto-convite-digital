import Evento from "./model/Evento";
import Convidado from "./model/Convidado";

import complementarConvidado from "./functions/complementarConvidado";
import criarConvidadoVazio from "./functions/criarConvidadoVazio";
import complementarEvento from "./functions/complementarEvento";
import criarEventoVazio from "./functions/criarEventoVazio";
import validarConvidado from "./functions/validarConvidado";
import validarEvento from "./functions/validarEvento";

export type { Evento, Convidado };
export {
  complementarConvidado,
  criarConvidadoVazio,
  complementarEvento,
  criarEventoVazio,
  validarConvidado,
  validarEvento,
};

export type {
  Convidado,
  Evento,
  IEvent,
  IEventGuest,
  IEventOffer,
  IGuest,
  IOffer,
  IUser,
  StatusPresence,
};
