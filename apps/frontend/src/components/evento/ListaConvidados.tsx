import { IGuest, IEventGuest } from "core";
import ConvidadoItem from "./ConvidadoItem";

export interface ListaConvidadosProps {
  convidados: IGuest[]
  convidadoEvento: IEventGuest;
}

export default function ListaConvidados(props: ListaConvidadosProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {props.convidados.map((convidado) => (
          <ConvidadoItem key={convidado.id} convidado={convidado} convidadoEvento={props.convidadoEvento} />
        ))}
      </ul>
    </div>
  );
}
