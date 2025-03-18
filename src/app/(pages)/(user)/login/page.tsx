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
import React from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useUser from "@/core/hooks/use-user";
import { useRouter } from "next/navigation";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

const Login = () => {
  const { login, loading, error } = useUser();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const success = await login(values.email, values.password);

    if (success) {
      router.push("/dashboard");
    }
  };

  return (
    <Card
      title="Login"
      className="border-0 md:border md:border-slate-500 w-full min-h-svh md:min-h-full"
    >
      <CardHeader className="flex flex-col justify-center items-center">
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu Email" {...field} />
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
                      placeholder="Sua senha de acesso"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              {loading ? "Carregando" : "Entrar"}
            </Button>
          </form>
        </Form>
        {error && <p className="text-red-500">{error}</p>}
      </CardContent>
      <CardFooter className="flex flex-col justify-center items-center">
        ou
        <Link href="/register">
          <Button variant={"link"}>Cadastrar</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Login;
