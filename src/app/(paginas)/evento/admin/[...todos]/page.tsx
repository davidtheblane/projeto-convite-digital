"use client";
import DashboardEvento from "@/components/evento/DashboardEvento";
import FormLoginAdmin from "@/components/evento/FormLoginAdmin";
import FormSenhaEvento from "@/components/evento/FormSenhaEvento";
import { eventos, IEvent, IEventGuest, IUser } from "@/core";
import useAPI from "@/data/hooks/useAPI";
import { use, useCallback, useEffect, useState } from "react";

export default function PaginaAdminEvento(props: any) {
  const { httpPost } = useAPI();
  const params: any = use(props.params);

  const id = params.todos[0];
  const [evento, setEvento] = useState<IEvent | null>(null);
  const [senha, setSenha] = useState<string>(params.todos[1] ?? "");
  const [email, setEmail] = useState<string>(params.todos[1] ?? "");
  const [user, setUser] = useState<IUser | null>(null);


  const presentes = evento?.guests.filter((c) => c.status === 'CONFIRMED') ?? []; // status present?
  const ausentes = evento?.guests.filter((c) => c.status === 'REFUSED') ?? []; // status present?
  // const aguardando = evento?.guests.filter((c) => !c.status === 'PENDING') ?? []; // status present?

  const totalGeral =
    presentes?.reduce((total: number, convidadoEvento: IEventGuest) => {
      return total + convidadoEvento.companions + 1;
    }, 0) ?? 0;

  function carregarEvento() {
    const evento = eventos.find((ev) => ev.id === id && ev.password === senha);
    console.log('evento', evento);
    setEvento(evento ?? null);
  }

  const obterEvento = useCallback(async () => {
    if (!id || !senha) return;
    const evento = await httpPost("/events/acessar", { id, senha });
    console.log({ evento })
    setEvento(evento);
  }, [httpPost, id, senha]);

  useEffect(() => {
    carregarEvento();
  }, [id, senha]);

  return (
    <div className="flex flex-col items-center">

      {/* {!user &&
        <FormSenhaEvento
          senha={senha}
          setSenha={setSenha}
          acessarEvento={obterEvento}
        />
      } */}

      {evento ? (
        <DashboardEvento
          evento={evento}
          ausentes={ausentes}
          presentes={presentes}
          totalGeral={totalGeral}
          atualizarListaConvidados={obterEvento}
        />
      ) : (
        <FormSenhaEvento
          senha={senha}
          setSenha={setSenha}
          acessarEvento={obterEvento}
        />
        // <FormLoginAdmin
        //   senha={senha}
        //   email={email}
        //   setSenha={setSenha}
        //   acessarEvento={obterEvento}
        // />
      )}
    </div>
  );
}
