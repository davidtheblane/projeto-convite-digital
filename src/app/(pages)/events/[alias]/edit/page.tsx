"use client";

import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { sanitizeString } from "@/lib/utils";
import useUser from "@/core/hooks/use-user";
import useEvent from "@/core/hooks/use-events";
import withAuth from "@/core/hoc/withAuth";
import EventForm from "@/components/forms/event-form";
import { formSchema, typeEventFormSchema } from "@/utils/definitions";
import CardCustomForm from "@/components/custom/card-custom-form";

const EventEdit = () => {
  const router = useRouter();
  const { user } = useUser();
  const { event, createEvent, getEventByAlias } = useEvent();

  const form = useForm<typeEventFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      alias: event?.alias || "",
      name: event?.name || "",
      description: event?.description || "",
      startDate: event?.startDate || new Date(),
      local: event?.local || "",
      address: event?.address || "",
      monetize: event?.monetize || false,
      keyPix: event?.keyPix || "",
      image: event?.image || "",
      imageBackground: event?.imageBackground || "",
      expectedAudience: event?.expectedAudience || 0,
      endDate: event?.endDate || new Date(),
    },
  });

  const { watch, setValue } = form;

  // Observa o campo "name"
  const nameValue = watch("name");

  // Atualiza o campo "alias" quando "name" muda
  useEffect(() => {
    const validateAlias = async (str: string) => {
      if (!str) return;

      const response = await getEventByAlias(str);
      if (response && response.id !== event?.id) {
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
  }, [nameValue, form, getEventByAlias, setValue, event?.id]);

  const onSubmit = async (values: typeEventFormSchema) => {
    if (!user) throw new Error("Usuário não encontrado");
    const data = {
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
    <CardCustomForm
      image={form.watch("image") || "/background-elementos.svg"}
      bgImage={
        form.watch("imageBackground") ||
        "https://t3.ftcdn.net/jpg/08/12/70/12/360_F_812701281_qDF1YDwHrQgs2BbUCIrgqzkdkNhokjwp.jpg"
      }
      preTitle={`Vamos editar o evento ${form.watch("name")}`}
      title={form.watch("name")}
      subTitle={form.watch("alias")}
      content={<EventForm form={form} onSubmit={onSubmit} />}
    />
  );
};

export default withAuth(EventEdit);
