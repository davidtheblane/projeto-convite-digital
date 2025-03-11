"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import DataPickerForm from "@/components/custom/data-picker";
import { Switch } from "@/components/ui/switch";
import { IEvent } from "@/core/interfaces/event.interface";
import { useRouter } from "next/navigation";
import { sanitizeString } from "@/lib/utils";
import useUser from "@/core/hooks/use-user";
import CardCustomForm from "@/components/custom/card-custom-form";
import { LabelInputForm } from "@/components/custom/label-custom";
import useEvent from "@/core/hooks/use-events";

const formSchema = z
  .object({
    alias: z.string().nonempty({ message: "Nome do evento é obrigatório" }),
    name: z.string().nonempty({ message: "Nome do evento é obrigatório" }),
    description: z.string().optional(),
    local: z.string().nonempty({ message: "Local do evento é obrigatório" }),
    address: z.string().optional(),
    monetize: z.boolean().default(false),
    keyPix: z.string().optional(),
    image: z.string().nonempty({ message: "Imagem do evento é obrigatório" }),
    imageBackground: z.string().nonempty({
      message: "Imagem de fundo do evento é obrigatório",
    }),
    expectedAudience: z.number().optional(),
    startDate: z
      .date({
        required_error: "Data de início é obrigatória",
        invalid_type_error: "Data de início deve ser uma data válida",
      })
      .default(() => new Date()),
    endDate: z.date({
      required_error: "Data de término é obrigatória",
      invalid_type_error: "Data de término deve ser uma data válida",
    }),
  })
  .refine(
    (data) => {
      if (data.endDate) {
        return data.endDate >= data.startDate;
      }
      return true;
    },
    {
      path: ["endDate"],
      message: "A data de término deve ser maior ou igual à data de início",
    }
  );

const EventCreate = () => {
  const router = useRouter();
  const { user } = useUser();
  const { createEvent, getEventByAlias } = useEvent();

  const [activeTab, setActiveTab] = useState("identifier");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      alias: "",
      name: "",
      description: "",
      startDate: new Date(),
      local: "",
      address: "",
      monetize: false,
      keyPix: "",
      image: "",
      imageBackground: "",
      expectedAudience: 0,
      endDate: new Date(),
    },
  });

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const { watch, setValue } = form;

  // Observa o campo "name"
  const nameValue = watch("name");

  // Atualiza o campo "alias" quando "name" muda
  useEffect(() => {
    const validateAlias = async (str: string) => {
      if (!str) return;

      const response = await getEventByAlias(str);
      if (response) {
        form.setError("alias", {
          type: "manual",
          message: "Identificador já está em uso",
        });
      } else {
        form.clearErrors("alias");
      }
    };
    const aliasValue = sanitizeString(nameValue);
    setValue("alias", aliasValue);
    validateAlias(aliasValue);
  }, [nameValue, form, getEventByAlias, setValue]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    if (!user) throw new Error("Usuário não encontrado");
    const data: Omit<IEvent, "id" | "createAt" | "updateAt"> = {
      ...values,
      password: "123456",
    };

    try {
      const response = await createEvent(data);
      if (response) {
        router.push("/events/success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardCustomForm
          image={form.watch("image") || "/background-elementos.svg"}
          bgImage={
            form.watch("imageBackground") ||
            "https://t3.ftcdn.net/jpg/08/12/70/12/360_F_812701281_qDF1YDwHrQgs2BbUCIrgqzkdkNhokjwp.jpg"
          }
          preTitle={`Olá ${user?.name}. Qual eventos vamos criar hoje?`}
          title={form.watch("name") || "Novo Evento"}
          subTitle={form.watch("alias")}
          content={
            <Tabs className="w-full" value={activeTab}>
              <div className="flex justify-center items-center pt-5">
                <TabsList className="flex gap-4 border bg-transparent p-5">
                  <TabsTrigger
                    value="identifier"
                    className={`flex items-center gap-1 cursor-default ${
                      activeTab === "identifier"
                        ? "text-white"
                        : "text-zinc-500"
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
                      activeTab === "address-date"
                        ? "text-white"
                        : "text-zinc-500"
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
                        activeTab === "address-date"
                          ? "block"
                          : "hidden md:block"
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
                </TabsList>
              </div>

              <TabsContent
                value="identifier"
                className="flex flex-col py-5 gap-8"
              >
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
                    onClick={() => setActiveTab("address-date")}
                    disabled={
                      !(
                        form.getValues("name") &&
                        form.getValues("alias") &&
                        !form.formState.errors.alias
                      )
                    }
                  >
                    <span className="font-bold text-base">{"Próximo"}</span>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent
                value="address-date"
                className="flex flex-col py-5 gap-8"
              >
                <div className="flex flex-col md:flex-row gap-8 w-full justify-between">
                  <FormField
                    name="startDate"
                    control={form.control}
                    render={({ field }) => (
                      <DataPickerForm field={field} label="Data de Inicio" />
                    )}
                  />
                  <FormField
                    name="endDate"
                    control={form.control}
                    render={({ field }) => (
                      <DataPickerForm field={field} label="Data de Fim" />
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
                    onClick={() => setActiveTab("others")}
                    disabled={
                      !(
                        form.getValues("endDate") >=
                          form.getValues("startDate") &&
                        form.getFieldState("local").isDirty
                      )
                    }
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
                        console.log(e.target.value);
                      }}
                    />
                  )}
                />
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

                <div className="flex justify-between gap-4">
                  <Button
                    variant={"secondary"}
                    size={"xl"}
                    onClick={() => setActiveTab("address-date")}
                  >
                    <span className="font-bold text-base">{"Anterior"}</span>
                  </Button>
                  <Button size={"xl"} type="submit">
                    <span className="font-bold text-base">{"Salvar"}</span>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          }
        />
      </form>
    </Form>
  );
};

export default EventCreate;
