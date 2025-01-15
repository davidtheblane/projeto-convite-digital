import { IEventGuest, IEvent, IGuest, StatusPresence } from "core";
import CampoEntrada from "../shared/CampoEntrada";
import CampoSimNao from "../shared/CampoSimNao";

export interface FormConvidadoProps {
  convidadoEvento: Partial<IEventGuest>;
  convidado: Partial<IGuest>
  evento: Partial<IEvent>;
  convidadoMudou: (convidado: Partial<IGuest>) => void;
  convidadoEventoMudou: (convidado: Partial<IEventGuest>) => void;
}

export default function FormConvidado(props: FormConvidadoProps) {

  return (
    <div className="flex flex-col gap-5">
      <CampoEntrada
        label="Nome"
        value={props.convidado.name ?? ""}
        onChange={(e) =>
          props.convidadoMudou({ ...props.convidado, name: e.target.value })
        }
      />
      <CampoEntrada
        label="Email"
        value={props.convidado.email ?? ""}
        onChange={(e) =>
          props.convidadoMudou({ ...props.convidado, email: e.target.value })
        }
      />
      <div className="flex gap-5">
        <CampoSimNao
          label="Presença Confirmada?"
          value={props.convidadoEvento.status === StatusPresence.CONFIRMED ? true : false}
          onChange={(valor) =>
            props.convidadoEventoMudou({
              ...props.convidadoEvento,
              status: valor ? StatusPresence.CONFIRMED : StatusPresence.REFUSED
            })
          }
          className="flex-1"
        />

        {props.convidadoEvento.status === StatusPresence.CONFIRMED && (
          <div className="flex-1 flex gap-5">
            <CampoEntrada
              label="Quantos Acompanhantes?"
              value={props.convidadoEvento.companions ?? 0}
              onChange={(e) =>
                props.convidadoEventoMudou({
                  ...props.convidadoEvento,
                  companions: +e.target.value,
                })
              }
              min={0}
              type="number"
            />
          </div>
        )}
      </div>
    </div>
  );
}
