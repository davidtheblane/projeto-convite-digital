import { IEventGuest } from "core";
import ConvidadoItem from "./ConvidadoItem";

export interface ListaConvidadosProps {
  convidadosEvento: IEventGuest[];
}

export default function ListaConvidados(props: ListaConvidadosProps) {
  const {convidadosEvento} = props;
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {convidadosEvento.map((convidadoEvento) => (
          <ConvidadoItem key={convidadoEvento?.guestId} convidadoEvento={convidadoEvento} />
        ))}
      </ul>
    </div>
  );
}
