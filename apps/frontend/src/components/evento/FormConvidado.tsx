import { IEventGuest, IEvent, IGuest } from "core";
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
  const possuiAcompanhantes = props.convidadoEvento.companions ?? true;
  
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
          value={props.convidadoEvento.status === 'CONFIRMED' ? true : false}
          onChange={(valor) =>
            props.convidadoEventoMudou({ ...props.convidadoEvento, status: valor})
          }
          className="flex-1"
        />

        {/* <div className="flex gap-5">
        <CampoSimNao
          label="Que trazes de bom?"
          value={props.convidado.confirmado ?? true}
          onChange={(valor) =>
            props.convidadoMudou({ ...props.convidado, confirmado: valor })
          }
          className="flex-1"
        /> */}

{/* // TODO VOLTAR AQUI E RESOLVER*/}
        {props.convidadoEvento.status === 'CONFIRMED' && (
          <div className="flex-1 flex gap-5">
            {/* <CampoSimNao
              label="Possui Acompanhantes?"
              value={props.convidadoEvento.companions === 0 ? false : true}
              onChange={(valor) =>
                props.convidadoEventoMudou({
                  ...props.convidado,
                  possuiAcompanhantes: valor,
                  qtdeAcompanhantes: valor ? 1 : 0,
                })
              }
              className="flex-1"
            /> */}
            {props.convidadoEvento.companions && (
              <CampoEntrada
                label="Quantos Acompanhantes?"
                value={props.convidadoEvento.companions ?? 1}
                onChange={(e) =>
                  props.convidadoEventoMudou({
                    ...props.convidado,
                    companions: +e.target.value,
                  })
                }
                min={1}
                type="number"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
