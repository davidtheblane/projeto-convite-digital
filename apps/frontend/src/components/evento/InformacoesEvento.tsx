import { IEvent } from "core";
import Informacao from "../shared/Informacao";

export interface InformacoesEventoProps {
  evento: IEvent;
  esconderNome?: boolean;
  className?: string;
}

export default function InformacoesEvento(props: InformacoesEventoProps) {
  const { evento } = props;
  return (
    <div className={`flex flex-col gap-2 ${props.className ?? ""}`}>
      {props.esconderNome ? null : (
        <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg">
          <span className="text-2xl font-black">{evento.alias}: </span>
          <span className="text-xl text-zinc-300">{evento.name}</span>
        </div>
      )}
      <div className="flex gap-2">
        <Informacao label="Data:">
          <span>
            {new Date(evento.initialDate!).toLocaleDateString()}
            {" às "}
            {new Date(evento.initialDate!).toLocaleTimeString()}
          </span>
        </Informacao>
        <Informacao label="Local:">{evento.local}</Informacao>
      </div>
      <Informacao label="Descrição:">{evento.description}</Informacao>
    </div>
  );
}
