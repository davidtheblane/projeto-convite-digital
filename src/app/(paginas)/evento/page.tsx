"use client";
import FormEvento from "@/components/evento/FormEvento";
import Janela from "@/components/shared/Janela";
import useEvento from "@/data/hooks/useEvento";

export default function PaginaEvento() {
  const { evento } = useEvento();
  return (
    <div>
      <Janela
        label="Qual evento vamos criar?"
        titulo={evento?.name ? evento?.name : "Novo Evento"}
        imagem={evento?.image}
        background={evento?.imageBackground}
      >
        <FormEvento />
      </Janela>
    </div>
  );
}
