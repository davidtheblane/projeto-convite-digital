// "use client";

// import { createContext, useCallback, useEffect, useState } from "react";
// import useAPI from "../hooks/useAPI";
// import { useRouter } from "next/navigation";
// import useMensagens from "../hooks/useMensagens";
// import { IEvent, IUser } from "@/core";

// export interface ContextoUsuarioProps {
//   usuario: IUser;
//   eventos: IEvent[];
//   autenticarUsuario(usuario: Partial<IUser>): void;

// criarConta(name: string, email: string, senha: string): Promise<void>;
// acessarConta(email: string, senha: string): Promise<void>;
// }

// const ContextoUsuario = createContext<ContextoUsuarioProps>({} as any);

// export function ProvedorContextoUsuario(props: any) {
//   const { httpGet, httpPost } = useAPI();
//   const { adicionarErro } = useMensagens();
//   const router = useRouter();

// const [evento, setEvento] = useState<Partial<IEvent>>(criarEventoVazio());
// const [user, setUser] = useState<Partial<IUser>>(criarConta());
// const [login, setLogin] = useState<Partial<IUser>>(acessarConta());


// const criarUsuario = useCallback(
//   async function () {
//     try {
//       const novoUsuario = await httpPost("/events/users", user);
//       router.push("/evento/sucesso");
//       setUser({
//         ...novoUsuario,
//         data: Data.desformatar(novoUsuario.data),
//       });
//     } catch (error: any) {
//       adicionarErro(error.messagem ?? "Ocorreu um erro inesperado!");
//     }
//   },
//   [user, httpPost, router]
// );

// const atualizarConta = useCallback(
//   async function (idOuAlias: string) {
//     try {
//       const contaAtualizada = await httpGet(`/events/${idOuAlias}`);
//       console.log('carregar-evento', evento);
//       if (!evento) return;
//       setEvento({
//         ...evento,
//         data: Data.desformatar(evento.data),
//       });
//     } catch (error: any) {
//       adicionarErro(error.messagem ?? "Ocorreu um erro inesperado!");
//     }
//   },
//   [httpGet, setEvento]
// );

// TODO: Implementar a função de logar na conta em outro arquivo
//   const autenticarUsuario = useCallback(
//     async function () {
//       const { email, password } = login;
//       try {
//         const authenticated = await httpPost("/auth/login", { email, password });
//         console.log({ authenticated });
//         setLogin(authenticated);
//       } catch (error: any) {
//         adicionarErro(error.messagem ?? "Ocorreu um erro inesperado!");
//       }
//     },
//     [httpGet, login]
//   );

//   return (
//     <ContextoUsuario.Provider
//       value={{
//         // evento,
//         // convidado,
//         // aliasValido,
//         // alterarEvento: setEvento,
//         // alterarConvidado: setConvidado,
//         // salvarEvento,
//         // carregarEvento,
//         // adicionarConvidado,
//         // criarUsuario,
//         autenticarUsuario,
//       }}
//     >
//       {props.children}
//     </ContextoUsuario.Provider>
//   );
// }

// export default ContextoUsuario;
