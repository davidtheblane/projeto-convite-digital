import { IEventGuest } from "@/core";

export interface ConvidadoItemProps {
  key: number;
  convidadoEvento: IEventGuest;
}


export default function ConvidadoItem(props: ConvidadoItemProps) {
  const { convidadoEvento } = props;
  return (
    <li className="flex justify-between bg-black/40 rounded-md px-6 py-3 border border-zinc-800">
      <div className="flex flex-col">
        <span className="text-xl font-bold">{convidadoEvento?.guest.name}</span>
        <span className="text-sm text-zinc-400">{convidadoEvento?.guest.email}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-sm text-zinc-400">Acompanhantes</span>
        <span className="text-xl font-bold">
          {convidadoEvento?.companions}
        </span>
      </div>
    </li>
  );
}
