/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  CalendarIcon,
  MapPinIcon,
  UsersIcon,
  BanknoteIcon,
  PenLineIcon,
  UserCircle,
  ChevronLeft,
  UserPlus,
  Link2,
} from "lucide-react";
import Image from "next/image";
import { use, useEffect } from "react";
import useEvent from "@/core/hooks/use-events";
import { formatDate, cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { StatusPresence } from "@/core/interfaces/event.interface";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import CopyButton from "@/components/custom/copy-button";

const EventDetail = ({ params }: any) => {
  const { alias } = use<any>(params);
  const { loading, event, getEventByAlias } = useEvent();

  useEffect(() => {
    const fetchEvent = async () => {
      await getEventByAlias(alias);
    };

    fetchEvent();
  }, [alias, getEventByAlias]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const getAudience = () => {
    const totalGuests = event?.guests?.reduce((acc: number, guest: any) => {
      if (guest.status === "CONFIRMED")
        return acc + 1 + (guest.companions || 0);
      return acc;
    }, 0);
    return totalGuests || 0;
  };

  // Generate invitation link based on the event alias
  const invitationLink = `${window.location.origin}/invite/${event?.alias}`;

  return (
    <div className="min-h-screen bg-background w-full rounded-lg">
      <div className="container mx-auto px-4 py-2 max-w-5xl w-full">
        <Card className="overflow-hidden border-none shadow-lg">
          {/* Hero Banner */}
          <div className="relative h-80 w-full">
            <Image
              src={event?.imageBackground || "/background-elementos.svg"}
              alt={`Imagem de fundo de ${event?.name}`}
              fill
              style={{ objectFit: "cover" }}
              className="brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end">
              <div className="p-8">
                <h1 className="text-5xl font-bold text-white mb-2">
                  {event?.name}
                </h1>
                <p className="text-xl text-white/80">{event?.alias}</p>
              </div>
            </div>
            <Button
              className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm hover:bg-white transition-all"
              onClick={() => window.history.back()}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden md:inline">Voltar</span>
            </Button>
            <Link href={`/events/${event?.alias}/edit`}>
              <Button className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm hover:bg-white transition-all">
                <PenLineIcon className="h-4 w-4" />
                <span className="hidden md:inline">Editar</span>
              </Button>
            </Link>
          </div>

          {/* Content */}
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Description */}
              <div className="md:col-span-3  border-b p-6 bg-card">
                <h2 className="text-2xl font-semibold mb-3">Descrição</h2>
                <p className="text-muted-foreground text-lg">
                  {event?.description}
                </p>
              </div>

              {/* Event Details */}
              <div className="p-6 border-b md:border-r border-border">
                <div className="flex items-center mb-4 text-primary">
                  <CalendarIcon className="mr-3 h-5 w-5" />
                  <h3 className="font-semibold text-lg">Data e Hora</h3>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Início:</p>
                    <p className="font-medium">
                      {event?.startDate
                        ? formatDate(event.startDate)
                        : "Data não disponível"}
                    </p>
                  </div>
                  {event?.endDate && (
                    <div>
                      <p className="text-sm text-muted-foreground">Término:</p>
                      <p className="font-medium">{formatDate(event.endDate)}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 border-b md:border-r border-border">
                <div className="flex items-center mb-4 text-primary">
                  <MapPinIcon className="mr-3 h-5 w-5" />
                  <h3 className="font-semibold text-lg">Local</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">{event?.local}</p>
                  {event?.address && (
                    <p className="text-sm text-muted-foreground">
                      {event?.address}
                    </p>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4 text-primary">
                  <UsersIcon className="mr-3 h-5 w-5" />
                  <h3 className="font-semibold text-lg">Público</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-2 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">
                      {event?.expectedAudience}
                    </p>
                    <p className="text-xs text-muted-foreground">esperado</p>
                  </div>
                  <div className="text-center p-2 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">{getAudience()}</p>
                    <p className="text-xs text-muted-foreground">confirmadas</p>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              {event?.monetize && (
                <>
                  <Separator className="md:col-span-3" />
                  <div className="p-6 md:col-span-3">
                    <div className="flex items-center mb-4 text-primary">
                      <BanknoteIcon className="mr-3 h-5 w-5" />
                      <h3 className="font-semibold text-lg">
                        Informações de Pagamento
                      </h3>
                    </div>
                    <div className="w-full bg-muted p-4 rounded-lg inline-flex items-center gap-3 justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Chave PIX:
                        </p>
                        <p className="font-medium">{event?.keyPix}</p>
                      </div>
                      <CopyButton
                        textToCopy={event?.keyPix || ""}
                        tooltipText="Copiar chave PIX"
                      />
                    </div>
                  </div>
                </>
              )}
              {/* Invitation Link */}
              <Separator className="md:col-span-3" />
              <div className="p-6 md:col-span-3">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-primary">
                    <UserPlus className="mr-3 h-5 w-5" />
                    <h3 className="font-semibold text-lg">Convidar Pessoas</h3>
                  </div>
                  {/* <Button asChild variant="outline" size="sm">
                    <Link href={`/events/${event?.alias}/invite`}>
                      <UserPlus className="h-4 w-4 mr-2" />
                      Convidar
                    </Link> 
                  </Button>
                    */}
                </div>

                <div className="flex items-center gap-3 bg-muted p-4 rounded-lg">
                  <div className="flex items-center gap-2 flex-1 overflow-hidden">
                    <Link2 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <p className="text-sm font-medium truncate">
                      {invitationLink}
                    </p>
                  </div>
                  <CopyButton
                    textToCopy={invitationLink}
                    tooltipText="Copiar link de convite"
                  />
                </div>
              </div>
            </div>
          </CardContent>

          {/* Guest List */}
          <div className="p-6 bg-muted/30">
            <h2 className="text-2xl font-semibold mb-4">Lista de Convidados</h2>
            <div className="space-y-3">
              {event?.guests?.map((guest: any) => (
                <div
                  key={guest.id}
                  className="flex flex-col md:flex-row justify-start md:justify-between  w-full bg-card rounded-lg p-4 shadow-sm transition-all hover:shadow-md gap-6"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-muted">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {guest.guest.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center">
                        <p className="font-medium">{guest.guest.name}</p>
                        <Badge
                          className={cn(
                            "ml-2 px-2 py-0.5 text-xs",
                            guest.status === "CONFIRMED"
                              ? "bg-green-500/20 text-green-600 hover:bg-green-500/20"
                              : guest.status === "REFUSED"
                              ? "bg-red-500/20 text-red-600 hover:bg-red-500/20"
                              : "bg-yellow-500/20 text-yellow-600 hover:bg-yellow-500/20"
                          )}
                        >
                          {StatusPresence[guest.status]}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {guest.guest.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm bg-muted px-3 py-1 rounded-full">
                    <UserCircle className="h-4 w-4 text-muted-foreground" />
                    <span>{guest.companions}</span>
                    <span className="text-sm text-muted-foreground md:hidden ml-1">
                      Acompanhantes
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EventDetail;
