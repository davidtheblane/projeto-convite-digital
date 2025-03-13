"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { typeEventFormSchema } from "@/utils/definitions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { LabelInputForm } from "../custom/label-custom";
import { sanitizeString } from "@/lib/utils";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { ptBR } from "date-fns/locale";
import { DateTimePicker } from "../custom/data-picker";

interface EventFormProps {
  form: UseFormReturn<typeEventFormSchema>;
  onSubmit: (values: typeEventFormSchema) => void;
}

const EventForm = ({ form, onSubmit }: EventFormProps) => {
  const [activeTab, setActiveTab] = useState("identifier");
  console.log({ values: form.formState.errors });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs className="w-full" value={activeTab}>
          <div className="flex justify-center items-center pt-5">
            <TabsList className="flex gap-4 border bg-transparent p-5">
              <TabsTrigger
                value="identifier"
                className={`flex items-center gap-1 cursor-default ${
                  activeTab === "identifier" ? "text-white" : "text-zinc-500"
                }`}
              >
                <span
                  className={`text-black
                      flex items-center justify-center
                      w-7 h-7 rounded-full ${
                        activeTab === "identifier" ? "bg-white" : "bg-zinc-500"
                      }`}
                >
                  1
                </span>
                <span
                  className={`${
                    activeTab === "identifier" ? "block" : "hidden md:block"
                  }`}
                >
                  Identificação do Evento
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="address-date"
                className={`flex items-center gap-1 cursor-default ${
                  activeTab === "address-date" ? "text-white" : "text-zinc-500"
                }`}
              >
                <span
                  className={`text-black
                      flex items-center justify-center
                      w-7 h-7 rounded-full ${
                        activeTab === "address-date"
                          ? "bg-white"
                          : "bg-zinc-500"
                      }`}
                >
                  2
                </span>
                <span
                  className={`${
                    activeTab === "address-date" ? "block" : "hidden md:block"
                  }`}
                >
                  Local e Data
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="others"
                className={`flex items-center gap-1 cursor-default ${
                  activeTab === "others" ? "text-white" : "text-zinc-500"
                }`}
              >
                <span
                  className={`text-black
                      flex items-center justify-center
                      w-7 h-7 rounded-full ${
                        activeTab === "others" ? "bg-white" : "bg-zinc-500"
                      }`}
                >
                  3
                </span>

                <span
                  className={`${
                    activeTab === "others" ? "block" : "hidden md:block"
                  }`}
                >
                  Informações Adicionais
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="gifts"
                className={`flex items-center gap-1 cursor-default ${
                  activeTab === "gifts" ? "text-white" : "text-zinc-500"
                }`}
              >
                <span
                  className={`text-black
                      flex items-center justify-center
                      w-7 h-7 rounded-full ${
                        activeTab === "gifts" ? "bg-white" : "bg-zinc-500"
                      }`}
                >
                  4
                </span>

                <span
                  className={`${
                    activeTab === "gifts" ? "block" : "hidden md:block"
                  }`}
                >
                  Presentes
                </span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="identifier" className="flex flex-col py-5 gap-8">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <LabelInputForm
                  label="Nome"
                  field={field}
                  placeholder="Nome do evento (ex.: 'Festa de Aniversário do João')"
                />
              )}
            />
            <FormField
              name="alias"
              control={form.control}
              render={({ field }) => (
                <LabelInputForm
                  label="Identificador"
                  field={field}
                  placeholder="Identificador único e exclusivo para o evento (usado na URL)"
                  onChange={(e) => {
                    const sanitizedValue = sanitizeString(e.target.value);
                    field.onChange(sanitizedValue);
                  }}
                />
              )}
            />
            <div className="flex justify-end">
              <Button
                size={"xl"}
                onClick={() => {
                  const { name, alias } = form.getValues();
                  if (name && alias) return setActiveTab("address-date");

                  if (!name)
                    form.setError("name", {
                      type: "value",
                    });
                }}
              >
                <span className="font-bold text-base">{"Próximo"}</span>
              </Button>
            </div>
          </TabsContent>

          <TabsContent
            value="address-date"
            className="flex flex-col py-5 gap-8"
          >
            <div className="flex flex-col md:flex-row w-full justify-between gap-4">
              <FormField
                name="startDate"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-lg font-black">
                      Data de Início
                    </FormLabel>
                    <FormControl>
                      <DateTimePicker
                        locale={ptBR}
                        hourCycle={24}
                        value={new Date(field.value)}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="endDate"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-lg font-black">
                      Data de Termino
                    </FormLabel>
                    <FormControl>
                      <DateTimePicker
                        locale={ptBR}
                        hourCycle={24}
                        value={new Date(field.value)}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              name="local"
              control={form.control}
              render={({ field }) => (
                <LabelInputForm
                  label="Local"
                  field={field}
                  placeholder="Nome do local do evento"
                />
              )}
            />
            <FormField
              name="address"
              control={form.control}
              render={({ field }) => (
                <LabelInputForm
                  label="Endereço"
                  field={field}
                  placeholder="Endereço completo do local do evento"
                />
              )}
            />
            {/* Footer */}
            <div className="flex justify-between gap-4">
              <Button
                variant={"secondary"}
                size={"xl"}
                onClick={() => setActiveTab("identifier")}
              >
                <span className="font-bold text-base">{"Anterior"}</span>
              </Button>
              <Button
                size={"xl"}
                onClick={() => {
                  const { startDate, endDate, local } = form.getValues();

                  if (!startDate || !endDate || endDate < startDate) {
                    form.setError("startDate", {
                      type: "manual",
                    });
                    form.setError("endDate", {
                      type: "manual",
                    });
                    return;
                  }

                  if (!local) {
                    return form.setError("local", {
                      type: "manual",
                      message: "Local do evento é obrigatório",
                    });
                  }

                  return setActiveTab("others");
                }}
              >
                <span className="font-bold text-base">{"Próximo"}</span>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="others" className="flex flex-col py-5 gap-8">
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <LabelInputForm
                  label="Descrição"
                  field={field}
                  placeholder="Descrição do evento (ex.: 'Só entra se trouxer presente!')"
                />
              )}
            />

            <FormField
              name="image"
              control={form.control}
              render={({ field }) => (
                <LabelInputForm
                  label="Imagem"
                  field={field}
                  placeholder="URL da imagem que será exibida no convite"
                />
              )}
            />

            <FormField
              name="imageBackground"
              control={form.control}
              render={({ field }) => (
                <LabelInputForm
                  label="Imagem de Fundo"
                  field={field}
                  placeholder="URL da imagem que será exibida como fundo no convite"
                />
              )}
            />

            <FormField
              name="expectedAudience"
              control={form.control}
              render={({ field }) => (
                <LabelInputForm
                  type="number"
                  label="Público Esperado"
                  field={field}
                  placeholder="Total de convidados e acompanhantes esperados"
                  onChange={(e) => {
                    field.onChange(Number(e.target.value));
                  }}
                />
              )}
            />

            <div className="flex justify-between gap-4">
              <Button
                variant={"secondary"}
                size={"xl"}
                onClick={() => setActiveTab("address-date")}
              >
                <span className="font-bold text-base">{"Anterior"}</span>
              </Button>
              <Button
                size={"xl"}
                onClick={() => {
                  const { image, imageBackground } = form.getValues();

                  if (!image) {
                    return form.setError("image", {
                      type: "manual",
                    });
                  }

                  if (!imageBackground) {
                    return form.setError("imageBackground", {
                      type: "manual",
                    });
                  }

                  return setActiveTab("gifts");
                }}
              >
                <span className="font-bold text-base">{"Próximo"}</span>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="gifts" className="flex flex-col py-5 gap-8">
            <div className="flex flex-col items-center justify-between rounded-lg border p-3 shadow-sm">
              <FormField
                name="monetize"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg p-3 w-full">
                    <FormLabel className="text-lg font-black">
                      Receber Pagamentos PIX
                    </FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {form.watch("monetize") && (
                <FormField
                  name="keyPix"
                  control={form.control}
                  render={({ field }) => (
                    <LabelInputForm
                      className="w-full"
                      label="Chave PIX"
                      field={field}
                      placeholder="Chave PIX para receber pagamentos"
                    />
                  )}
                />
              )}
            </div>
            <FormField
              name="linkGifts"
              control={form.control}
              render={({ field }) => (
                <LabelInputForm
                  className="w-full"
                  label="Lista de presentes"
                  field={field}
                  placeholder="URL da lista de presentes"
                />
              )}
            />
            <div>
              {Object.entries(form.formState.errors).map(([key, value]) => {
                return (
                  <div key={key}>
                    <p className="text-red-500 text-sm">
                      {key}:{value.message}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between gap-4">
              <Button
                variant={"secondary"}
                size={"xl"}
                onClick={() => setActiveTab("others")}
              >
                <span className="font-bold text-base">{"Anterior"}</span>
              </Button>
              <Button size={"xl"} type="submit">
                <span className="font-bold text-base">{"Salvar"}</span>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </form>
    </Form>
  );
};

export default EventForm;
