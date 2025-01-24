"use client"; /* eslint-disable @typescript-eslint/no-explicit-any */
import React, { use, useEffect, useState } from "react";
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
import CardCustomForm from "@/components/custom/card-custom-form";
import { LabelCustom, LabelInputForm } from "@/components/custom/label-custom";
import useEvent from "@/core/hooks/use-events";
import { format } from "date-fns";
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

export const formQuestSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
});

const status = ["CONFIRMED", "REFUSED"] as const;

const traslateStatus = {
  CONFIRMED: "Com certeza! 🥳",
  REFUSED: "Não 🥹",
};

export const formQuestEventSchema = z.object({
  status: z.enum(status),
  companions: z.number(),
  offerValue: z.number(),
  offerQuantity: z.number(),
});

const CreateSuccess = ({ params }: any) => {
  const { alias } = use<any>(params);
  const router = useRouter();
  const { event, getEventByAlias } = useEvent();

  const { httpPost, extrairDados } = useAPI();

  const [activeTab, setActiveTab] = useState("guest"); // guest | confirm
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
    console.log(values);
    const resp = await extrairDados(await httpPost("guests", values));
    setGuestId(resp.id);
    setActiveTab("confirm");
  };

  const onSubmitEvent = async (
    values: z.infer<typeof formQuestEventSchema>
  ) => {
    console.log(values);
    const resp = await extrairDados(
      await httpPost("event-guest", { ...values, guestId, eventId: event?.id })
    );

    if (resp) router.push("/invite/confirm/" + values.status.toLowerCase());
  };

  return (
    <CardCustomForm
      title={event?.name || "Title"}
      preTitle="Você foi convidado para o evento:"
      bgImage={event?.imageBackground || "/background.png"}
      image={event?.image || "/background-elementos.svg"}
      content={
        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full">
              <LabelCustom
                text={
                  <div className="text-xl">
                    {format(
                      event?.startDate || "2025-01-01",
                      "dd/MM/yyyy HH:mm"
                    )}{" "}
                    ~{" "}
                    {format(event?.endDate || "2025-01-01", "dd/MM/yyyy HH:mm")}
                  </div>
                }
                label="Data e Hora"
              />
              <LabelCustom
                text={
                  <div className="text-xl">
                    {event?.local || "Local"}
                    <p className="text-xs">{event?.address || "Endereço"}</p>
                  </div>
                }
                label="Endereço"
              />
            </div>
            <LabelCustom
              text={
                <div className="text-xl">
                  {event?.description || "Descrição"}
                </div>
              }
              label="Descrição"
            />
          </div>
          <Tabs value={activeTab} className="w-full">
            <TabsContent value="guest">
              <div className="flex flex-col w-full pb-3">
                <span className="font-bold text-base">
                  Aqui você pode se identificar! 😉😉
                </span>
              </div>
              <Form {...formQuest}>
                <form
                  onSubmit={formQuest.handleSubmit(onSubmit)}
                  className="flex flex-col gap-4 w-full"
                >
                  <FormField
                    control={formQuest.control}
                    name="name"
                    render={({ field }) => (
                      <LabelInputForm
                        field={field}
                        label="Nome"
                        placeholder="Digite seu nome"
                      />
                    )}
                  />
                  <FormField
                    control={formQuest.control}
                    name="email"
                    render={({ field }) => (
                      <LabelInputForm
                        type="email"
                        field={field}
                        label="Email"
                        placeholder="Digite seu email"
                      />
                    )}
                  />
                  <Button type="submit">Próximo</Button>
                </form>
              </Form>
            </TabsContent>
            <TabsContent value="confirm">
              <div className="flex flex-col items-center justify-between rounded-lg border p-3 shadow-sm">
                <Form {...formQuestEvent}>
                  <form
                    onSubmit={formQuestEvent.handleSubmit(onSubmitEvent)}
                    className="flex flex-col gap-4 w-full"
                  >
                    <FormField
                      name="status"
                      control={formQuestEvent.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-black">
                            Nos encontraremos lá?
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione uma opção" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {status.map((item) => (
                                <SelectItem key={item} value={item}>
                                  {traslateStatus[item]}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Label className="text-lg font-black">Acompanhantes?</Label>
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
                    {companions && (
                      <FormField
                        control={formQuestEvent.control}
                        name="companions"
                        render={({ field }) => (
                          <LabelInputForm
                            type="number"
                            field={field}
                            label="Quantidade de convidados"
                            placeholder="Digite a quantidade de convidados"
                            onChange={(e) => {
                              field.onChange(parseInt(e.target.value));
                            }}
                          />
                        )}
                      />
                    )}
                    <Button type="submit">Confirmar</Button>
                  </form>
                </Form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      }
    />
  );
};

export default CreateSuccess;
