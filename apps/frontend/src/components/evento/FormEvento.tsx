import useEvento from "@/data/hooks/useEvento";
import Passos from "../shared/Passos";
import CampoEntrada from "../shared/CampoEntrada";
import { Alias, Data } from "core";
import CampoSimNao from "../shared/CampoSimNao";

export default function FormEvento() {
  const { evento, aliasValido, alterarEvento, salvarEvento } = useEvento();

  const labels = [
    "Identificação do Evento",
    "Local e Data",
    "Informações Finais",
  ];

  const permiteProximoPasso: boolean[] = [
    !!evento.alias && !!evento.name && aliasValido,
    !!evento.initialDate && !!evento.local,
    !!evento.description && (evento.expectedAudience ?? 0) > 0,
    // &&
    // !!evento.image &&
    // !!evento.imageBackground,
  ];

  return (
    <div>
      <Passos
        labels={labels}
        labelAcao="Salvar"
        acao={salvarEvento}
        permiteProximoPasso={permiteProximoPasso}
      >
        <div className="flex flex-col gap-5">
          <CampoEntrada
            label="Identificador"
            descricao="Identificador único e exclusivo para o evento (usado na URL)"
            value={Alias.formatar(evento.alias ?? "")}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                alias: Alias.formatar(e.target.value),
              })
            }
            erro={aliasValido ? "" : "Alias já foi utilizado em outro evento"}
          />
          <CampoEntrada
            label="Nome"
            descricao='Nome do evento (ex.: "Festa de Aniversário do João")'
            value={evento.name ?? ""}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                nome: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <CampoEntrada
            label="Data"
            descricao="Data e hora em que o evento ocorrerá"
            value={Data.formatar(evento.initialDate ?? new Date())}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                data: Data.desformatar(e.target.value),
              })
            }
            type="datetime-local"
          />
          <CampoEntrada
            label="Local"
            descricao="Local onde o evento será realizado"
            value={evento.local ?? ""}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                local: e.target.value,
              })
            }
          />
          <CampoEntrada
            label="Endereço"
            descricao="Digite o endereço do local"
            value={evento.address ?? ""}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                endereco: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <CampoEntrada
            label="Descrição"
            descricao='Descrição do evento (ex.: "Só entra se trouxer presente!")'
            value={evento.description ?? ""}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                descricao: e.target.value,
              })
            }
          />
          <CampoEntrada
            label="Imagem"
            descricao="URL da imagem que será exibida no convite"
            value={evento.image ?? ""}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                imagem: e.target.value,
              })
            }
          />
          <CampoEntrada
            label="Background"
            descricao="URL da imagem que será exibida como background no convite"
            value={evento.imageBackground ?? ""}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                imagemBackground: e.target.value,
              })
            }
          />
          <CampoEntrada
            label="Público Esperado"
            descricao="Total de convidados e acompanhantes esperados"
            value={evento.expectedAudience ?? 1}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                publicoEsperado: Number(e.target.value),
              })
            }
            type="number"
            min={1}
          />
          <div className="flex gap-5">
                  <CampoSimNao
                    label="Receber Pagamentos?"
                    value={evento.monetize ?? false}
                    onChange={(valor) =>
                      alterarEvento({
                        ...evento,
                        monetize: valor,
                      })
                    }
                    className="flex-1"
                  />

              {evento.monetize && (
                <CampoEntrada
                label="Chave Pix"
                descricao="Digite a chave pix para receber pagamentos."
                value={evento.keyPix ?? ""}
                onChange={(e) =>
                  alterarEvento({
                    ...evento,
                    chavePix: e.target.value,
                  })
                }
                type="string"
                min={1}
              />
              )}
          </div>

        </div>
      </Passos>
    </div>
  );
}
