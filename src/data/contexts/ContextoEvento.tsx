"use client";
import {
  criarConvidadoVazio,
  criarEventoVazio,
  IEventGuest,
  Data,
  IEvent,
  complementarEvento,
} from "core";
import { createContext, useCallback, useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import { useRouter } from "next/navigation";
import useMensagens from "../hooks/useMensagens";

export interface ContextoEventoProps {
  evento: Partial<IEvent>;
  convidado: Partial<IEventGuest>;
  aliasValido: boolean;

  alterarEvento(evento: Partial<IEvent>): void;
  alterarConvidado(convidado: Partial<IEventGuest>): void;

  carregarEvento(idOuAlias: string): Promise<void>;
  salvarEvento(): Promise<void>;

  adicionarConvidado(): void;
}

const ContextoEvento = createContext<ContextoEventoProps>({} as any);

export function ProvedorContextoEvento(props: any) {
  const { httpGet, httpPost } = useAPI();
  const { adicionarErro } = useMensagens();
  const router = useRouter();

  const [aliasValido, setAliasValido] = useState(true);
  const [evento, setEvento] = useState<Partial<IEvent>>(criarEventoVazio());
  const [convidado, setConvidado] = useState<Partial<IEventGuest>>(
    criarConvidadoVazio()
  );

  const salvarEvento = useCallback(
    async function () {
      try {
        console.log('evento-contexto', evento);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { ...eventData } = evento;

        const data = {
          ...eventData,
          userId: 1 // TODO remover apos implementar autenticação
        }
        console.log('event-front-request', data);

        const eventoCriado = await httpPost("/events", data);
        router.push("/evento/sucesso");
        setEvento({
          ...eventoCriado,
          data: Data.desformatar(eventoCriado.data),
        });
      } catch (error: any) {
        adicionarErro(error.messagem ?? "Ocorreu um erro inesperado!");
      }
    },
    [evento, httpPost, router]
  );

  const carregarEvento = useCallback(
    async function (idOuAlias: string) {
      try {
        const evento = await httpGet(`/events/alias/${idOuAlias}`);
        console.log('carregar-evento', evento);
        if (!evento) return;
        setEvento(evento);
      } catch (error: any) {
        adicionarErro(error.messagem ?? "Ocorreu um erro inesperado!");
      }
    },
    [httpGet, setEvento]
  );

  const adicionarConvidado = useCallback(
    async function () {
      try {
        await httpPost(`/guests/${evento.alias}/guest`, convidado);
        router.push("/convite/obrigado");
      } catch (error: any) {
        adicionarErro(error.messagem ?? "Ocorreu um erro inesperado!");
      }
    },
    [httpPost, evento, convidado, router]
  );

  const validarAlias = useCallback(
    async function () {
      try {
        const { valido } = await httpGet(
          `/events/validate/${evento.alias}`
        );
        setAliasValido(valido);
      } catch (error: any) {
        adicionarErro(error.messagem ?? "Ocorreu um erro inesperado!");
      }
    },
    [httpGet, evento]
  );

  useEffect(() => {
    if (evento?.alias) validarAlias();
  }, [evento?.alias, validarAlias]);

  return (
    <ContextoEvento.Provider
      value={{
        evento,
        convidado,
        aliasValido,
        alterarEvento: setEvento,
        alterarConvidado: setConvidado,
        salvarEvento,
        carregarEvento,
        adicionarConvidado,
      }}
    >
      {props.children}
    </ContextoEvento.Provider>
  );
}

export default ContextoEvento;
