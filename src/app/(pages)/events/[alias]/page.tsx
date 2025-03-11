/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  CalendarIcon,
  MapPinIcon,
  UsersIcon,
  BanknoteIcon,
} from "lucide-react";
import Image from "next/image";
import React, { use, useEffect } from "react";
import EventCardDetails from "../../dashboard/_components/EventCardDetails";
import { useRouter } from "next/navigation";
import useEvent from "@/core/hooks/use-events";
import { formatDate } from "@/lib/utils";

const EventDetail = ({ params }: any) => {
  const { alias } = use<any>(params);
  const router = useRouter();
  const { loading, event, getEventByAlias } = useEvent();

  useEffect(() => {
    const fetchEvent = async () => {
      await getEventByAlias(alias);
    };

    fetchEvent();
  }, [router, getEventByAlias, alias]);

  if (loading)
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Carregando...</p>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src={event?.imageBackground || "/background-elementos.svg"}
            alt={`Imagem de fundo de ${event?.name}`}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="p-6">
              <h1 className="text-4xl font-bold text-white mb-2">
                {event?.name}
              </h1>
              <p className="text-xl text-white">{event?.alias}</p>
            </div>
          </div>
        </div>
        <CardContent className="scroll-smooth w-full flex flex-wrap gap-6 py-6 rounded-sm overflow-y-auto">
          <div className="grow w-full">
            <h2 className="text-2xl font-semibold mb-2">Descrição</h2>
            <p>{event?.description}</p>
          </div>

          <EventCardDetails
            title="Data e Hora"
            icon={<CalendarIcon className="mr-2" />}
            content={
              <>
                <p>
                  <strong>Início:</strong>{" "}
                  {event?.startDate
                    ? formatDate(event.startDate)
                    : "Data não disponível"}
                </p>
                {event?.endDate && (
                  <p>
                    <strong>Término:</strong> {formatDate(event.endDate)}
                  </p>
                )}
              </>
            }
          />

          <EventCardDetails
            title="Local"
            icon={<MapPinIcon className="mr-2" />}
            content={
              <>
                <p>{event?.local}</p>
                {event?.address && (
                  <p className="text-sm text-muted-foreground">
                    {event?.address}
                  </p>
                )}
              </>
            }
          />

          <EventCardDetails
            title="Publico Esperado"
            icon={<UsersIcon className="mr-2" />}
            content={<p>{event?.expectedAudience?.toLocaleString()} pessoas</p>}
          />

          {event?.monetize && (
            <EventCardDetails
              title="Informações de Pagamento"
              icon={<BanknoteIcon className="mr-2" />}
              content={
                <p>
                  <strong>Chave PIX:</strong> {event?.keyPix}
                </p>
              }
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EventDetail;
