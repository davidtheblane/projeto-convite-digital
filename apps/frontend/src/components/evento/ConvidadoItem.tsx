import { IGuest, IEventGuest } from "core";

export interface ConvidadoItemProps {
  convidado: IGuest;
  convidadoEvento: IEventGuest;
}


export default function ConvidadoItem(props: ConvidadoItemProps) {
  return (
    <li className="flex justify-between bg-black/40 rounded-md px-6 py-3 border border-zinc-800">
      <div className="flex flex-col">
        <span className="text-xl font-bold">{props.convidado.name}</span>
        <span className="text-sm text-zinc-400">{props.convidado.email}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-sm text-zinc-400">Acompanhantes</span>
        <span className="text-xl font-bold">
          {props.convidadoEvento.companions}
        </span>
      </div>
    </li>
  );
}
