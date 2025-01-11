import { 
  IEvent,
  IEventGuest,
} from "core";
import InformacoesEvento from "./InformacoesEvento";
import AcessarViaQrCode from "./AcessarViaQrCode";
import Estatistica from "../shared/Estatistica";
import ListaConvidados from "./ListaConvidados";

export interface DashboardEventoProps {
  evento: IEvent;
  totalGeral: number;
  ausentes: IEventGuest[];
  presentes: IEventGuest[];
  atualizarListaConvidados: () => void;
}

export default function DashboardEvento(props: DashboardEventoProps) {
  const {evento, presentes, ausentes, totalGeral, atualizarListaConvidados} = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InformacoesEvento evento={evento} className="flex-1" />
        <AcessarViaQrCode evento={evento} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatistica
          texto="Expectativa de Convidados:"
          valor={evento.expectedAudience}
          imagem="/icones/convidados.svg"
        />
        <Estatistica
          texto="Confirmações:"
          valor={presentes.length}
          imagem="/icones/confirmados.svg"
        />
        <Estatistica
          texto="Total Confirmado:"
          valor={totalGeral}
          imagem="/icones/acompanhantes.svg"
        />
      </div>

      <button
        className="botao azul self-end mt-12"
        onClick={atualizarListaConvidados}
      >
        <span>Atualizar Lista de Convidados</span>
      </button>

      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confimaram PRESENÇA
      </span>
      <ListaConvidados convidadosEvento={presentes} />

      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram AUSÊNCIA
      </span>
      <ListaConvidados convidadosEvento={ausentes} />
    </div>
  );
}
