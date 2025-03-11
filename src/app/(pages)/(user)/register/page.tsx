"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useUser from "@/core/hooks/use-user";
import { useRouter } from "next/navigation";
import { welcomeMail } from "@/hooks/use-mail";

const formSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    password: z
      .string()
      .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
  })
  .refine(
    (data) => {
      if (data.confirmPassword) {
        return data.confirmPassword === data.password;
      }
      return true;
    },
    {
      path: ["confirmPassword"],
      message: "Senhas diferentes",
    }
  );

const UserRegister = () => {
  const { createUser, loading, error } = useUser();
  const router = useRouter();

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { name, email, password } = values;
    const success = await createUser({ name, email, password });

    if (success) {
      toast({
        title: "Sucesso!",
        description: "Cadastro realizado com sucesso",
      });
      await welcomeMail(name, email);
      router.push("/login");
    }
  };

  return (
    <Card title="register" className="border-slate-500 w-full ">
      <CardHeader className="flex flex-col justify-center items-center">
        <CardTitle>Vamos criar o seu cadastro! 😊</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Qual seu nome?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu melhor email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Cria a senha de acesso"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confimação de Senha</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Coloca a mesma senha de cima"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              {loading ? "Carregando" : "Confirmar"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        {error && <p className="text-red-500">{error}</p>}
      </CardFooter>
    </Card>
  );
};

export default UserRegister;
