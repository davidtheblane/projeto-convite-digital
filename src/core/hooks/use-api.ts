import { useCallback } from "react";

const urlBase = process.env.NEXT_PUBLIC_API_URL;

export default function useAPI() {
  const httpGet = useCallback(async function (caminho: string, token?: string) {
    const urlCompleta = `${urlBase}/${caminho}`;
    console.log({ urlCompleta });

    const headers: HeadersInit = token
      ? { Authorization: `Bearer ${token}` }
      : {};

    const resposta = await fetch(urlCompleta, { headers });
    return resposta;
  }, []);

  const httpPost = useCallback(async function (
    caminho: string,
    body?: Record<string, unknown>,
    token?: string
  ) {
    const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const urlCompleta = `${urlBase}${uri}`;
    console.log({ urlCompleta });

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const resposta = await fetch(urlCompleta, {
      method: "POST",
      headers,
      body: body ? JSON.stringify(body) : null,
    });

    return resposta;
  },
  []);

  const extrairDados = useCallback(async function (response: Response) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let conteudo: any;

    try {
      conteudo = await response.json();
    } catch (error) {
      if (!response.ok) {
        throw new Error(
          `Ocorreu um erro inesperado com status ${response.status}. Detalhe do erro ${error}`
        );
      }
      console.log({ error });
      return null;
    }
    if (!response.ok) throw conteudo;
    return conteudo;
  }, []);

  return { httpGet, httpPost, extrairDados };
}
