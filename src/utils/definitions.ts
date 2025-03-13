import { z } from "zod";

export const formSchema = z
  .object({
    alias: z.string().nonempty({ message: "Alias do evento é obrigatório" }),
    name: z.string().nonempty({ message: "Nome do evento é obrigatório" }),

    local: z.string().nonempty({ message: "Local do evento é obrigatório" }),
    address: z.string().optional(),
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

    description: z.string().optional(),
    image: z.string().nonempty({ message: "Imagem do evento é obrigatório" }),
    imageBackground: z.string().nonempty({
      message: "Imagem de fundo do evento é obrigatório",
    }),
    expectedAudience: z.number().optional(),

    monetize: z.boolean().default(false),
    keyPix: z.string().optional(),
    linkGifts: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.endDate) {
        return data.endDate > data.startDate;
      }
      return true;
    },
    {
      path: ["endDate"],
      message: "A data e hora de término deve ser maior à data de início",
    }
  );

export type typeEventFormSchema = z.infer<typeof formSchema>;
