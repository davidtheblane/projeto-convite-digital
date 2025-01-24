"use client";

import CardCustomForm from "@/components/custom/card-custom-form";
import useEvent from "@/core/hooks/use-events";
import React from "react";
import { LabelCustom, LabelInputRO } from "@/components/custom/label-custom";
import { formatDate } from "@/lib/utils";

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
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <LabelInputRO
              label="Link pra convidar:"
              text={`${window.location.origin}/invite/${event?.alias}`}
            />
          </div>
        </div>
      }
    />
  );
};

export default EventSuccess;
