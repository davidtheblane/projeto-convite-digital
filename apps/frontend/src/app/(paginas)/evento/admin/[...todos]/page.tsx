"use client";
import DashboardEvento from "@/components/evento/DashboardEvento";
import FormSenhaEvento from "@/components/evento/FormSenhaEvento";
import useAPI from "@/data/hooks/useAPI";
import { Convidado, IEvent, eventos, IEventGuest } from "core";
import { use, useCallback, useEffect, useState } from "react";

export default function PaginaAdminEvento(props: any) {
  const { httpPost } = useAPI();
  const params: any = use(props.params);

  const id = params.todos[0];
  const [evento, setEvento] = useState<IEvent | null>(null);
  const [senha, setSenha] = useState<string>(params.todos[1] ?? "");

  const presentes = evento?.guests.filter((c) => c.status === 'CONFIRMED') ?? []; // status present?
  const ausentes = evento?.guests.filter((c) => !c.status === 'REFUSED') ?? []; // status present?
  // const aguardando = evento?.guests.filter((c) => !c.status === 'PENDING') ?? []; // status present?


  const totalGeral =
    presentes?.reduce((total: number, convidado: Convidado) => {
      return total + convidado.qtdeAcompanhantes + 1;
    }, 0) ?? 0;

  function carregarEvento() {
    const evento = eventos.find((ev) => ev.id === id && ev.password === password);
    setEvento(evento ?? null);
  }

  const obterEvento = useCallback(async () => {
    if (!id || !password) return;
    const evento = await httpPost("/eventos/acessar", { id, password });
    setEvento(evento);
  }, [httpPost, id, password]);

  useEffect(() => {
    carregarEvento();
  }, [id, password]);

  return (
    <div className="flex flex-col items-center">
      {evento ? (
        <DashboardEvento
          evento={evento}
          presentes={presentes}
          ausentes={ausentes}
          totalGeral={totalGeral}
          atualizarListaConvidados={obterEvento}
        />
      ) : (
        <FormSenhaEvento
          acessarEvento={obterEvento}
          senha={senha}
          setSenha={setSenha}
        />
      )}
    </div>
  );
}
