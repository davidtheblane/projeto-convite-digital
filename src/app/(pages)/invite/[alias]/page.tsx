/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { use, useEffect, useState } from "react";
import useEvent from "@/core/hooks/use-events";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import useAPI from "@/core/hooks/use-api";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";

const formQuestSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z.string().email("Email inválido"),
});

const status = ["CONFIRMED", "REFUSED"] as const;

const translateStatus = {
  CONFIRMED: "Com certeza! 🥳",
  REFUSED: "Não 🥹",
};

const formQuestEventSchema = z.object({
  status: z.enum(status),
  companions: z.number(),
  offerValue: z.number(),
  offerQuantity: z.number(),
});

export default function InvitePage({ params }: any) {
  const { alias } = use<any>(params);
  const router = useRouter();
  const { event, getEventByAlias } = useEvent();
  const { httpPost, extrairDados } = useAPI();

  const [activeTab, setActiveTab] = useState("guest");
  const [guestId, setGuestId] = useState(0);
  const [companions, setCompanions] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      await getEventByAlias(alias);
    };

    fetchEvent();
  }, [getEventByAlias, alias]);

  const formQuest = useForm<z.infer<typeof formQuestSchema>>({
    resolver: zodResolver(formQuestSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const formQuestEvent = useForm<z.infer<typeof formQuestEventSchema>>({
    resolver: zodResolver(formQuestEventSchema),
    defaultValues: {
      status: "CONFIRMED",
      companions: 0,
      offerValue: 0,
      offerQuantity: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof formQuestSchema>) => {
    const resp = await extrairDados(await httpPost("guests", values));
    setGuestId(resp.id);
    setActiveTab("confirm");
  };

  const onSubmitEvent = async (
    values: z.infer<typeof formQuestEventSchema>
  ) => {
    const resp = await extrairDados(
      await httpPost("event-guest", { ...values, guestId, eventId: event?.id })
    );

    if (resp) router.push("/invite/confirm/" + values.status.toLowerCase());
  };

  if (!event) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

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
                <p className="text-white/80 mb-2">
                  Você foi convidado para o evento:
                </p>
                <h1 className="text-4xl font-bold text-white">{event?.name}</h1>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Description */}
              <div className="md:col-span-3  border-b p-6 bg-card">
                <h2 className="text-2xl font-semibold mb-3">Descrição</h2>
                <p className="text-muted-foreground text-lg">
                  {event?.description}
                </p>
              </div>
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
            </div>

            {/* RSVP Form */}
            <Tabs value={activeTab} className="w-full p-4">
              <TabsContent value="guest">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">
                      Identificação
                    </h2>
                    <p className="text-muted-foreground">
                      Por favor, preencha seus dados para confirmar sua presença
                    </p>
                  </div>

                  <Form {...formQuest}>
                    <form
                      onSubmit={formQuest.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={formQuest.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                              <Input placeholder="Digite seu nome" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={formQuest.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Digite seu email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full">
                        Próximo
                      </Button>
                    </form>
                  </Form>
                </div>
              </TabsContent>

              <TabsContent value="confirm">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">Confirmação</h2>
                    <p className="text-muted-foreground">
                      Confirme sua presença e informe se terá acompanhantes
                    </p>
                  </div>

                  <Form {...formQuestEvent}>
                    <form
                      onSubmit={formQuestEvent.handleSubmit(onSubmitEvent)}
                      className="space-y-6"
                    >
                      <FormField
                        name="status"
                        control={formQuestEvent.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">
                              Nos encontraremos lá?
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Selecione uma opção" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {status.map((item) => (
                                  <SelectItem key={item} value={item}>
                                    {translateStatus[item]}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-4">
                        <Label className="text-base font-semibold">
                          Acompanhantes?
                        </Label>
                        <div className="flex items-center gap-3">
                          <Label>Não</Label>
                          <Switch
                            onCheckedChange={(checked) => {
                              setCompanions(checked);
                              formQuestEvent.setValue("companions", 0);
                            }}
                            checked={companions}
                          />
                          <Label>Sim</Label>
                        </div>
                      </div>

                      {companions && (
                        <FormField
                          control={formQuestEvent.control}
                          name="companions"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Quantidade de acompanhantes</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder="Digite a quantidade"
                                  onChange={(e) =>
                                    field.onChange(
                                      Number.parseInt(e.target.value)
                                    )
                                  }
                                  value={field.value}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                      <Button type="submit" className="w-full">
                        Confirmar presença
                      </Button>
                    </form>
                  </Form>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
