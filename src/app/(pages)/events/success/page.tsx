"use client";

import CardCustomForm from "@/components/custom/card-custom-form";
import useEvent from "@/core/hooks/use-events";
import React from "react";
import { LabelCustom } from "@/components/custom/label-custom";
import { formatDate } from "@/lib/utils";
import CopyButton from "@/components/custom/copy-button";
import { Link2, UserPlus } from "lucide-react";

const EventSuccess = () => {
  const { event } = useEvent();

  return (
    <CardCustomForm
      title={event?.name || "Title"}
      preTitle="Evento Criado com sucesso"
      subTitle={event?.alias || "SubTitle"}
      bgImage={event?.imageBackground || "/background.png"}
      image={event?.image || "/background-elementos.svg"}
      content={
        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full">
              <LabelCustom
                text={
                  <div>
                    De: {formatDate(event?.startDate || "2025-01-01")}
                    <br />
                    Até: {formatDate(event?.endDate || "2025-01-01")}
                  </div>
                }
                label="Data e Hora"
              />
              <LabelCustom
                text={
                  <div>
                    Local: {event?.local || "Local"}
                    <br />
                    Endereço: {event?.address || "Endereço"}
                  </div>
                }
                label="Local e Endereço"
              />
            </div>
            <LabelCustom
              text={event?.description || "Descrição"}
              label="Descrição"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <span className="text-center w-full text-lg">
              Seu evento foi criado com sucesso! 🎉🪩
            </span>
            <span className="text-center w-full text-sm">
              Use o link abaixo para convidar seus amigos!
            </span>
          </div>
          <div className="w-full p-6 md:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-primary">
                <UserPlus className="mr-3 h-5 w-5" />
                <h3 className="font-semibold text-lg">Convidar Pessoas</h3>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-muted p-4 rounded-lg">
              <div className="flex items-center gap-2 flex-1 overflow-hidden">
                <Link2 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <p className="text-sm font-medium truncate">
                  {`${window.location.origin}/invite/${event?.alias}`}
                </p>
              </div>
              <CopyButton
                textToCopy={`${window.location.origin}/invite/${event?.alias}`}
                tooltipText="Copiar link de convite"
              />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default EventSuccess;
