import { useCallback } from "react";

const urlBase = process.env.NEXT_PUBLIC_API_URL;

export default function useAPI() {
  const httpGet = useCallback(async function (caminho: string) {
    const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const urlCompleta = `${urlBase}${uri}`;
    console.log({ urlCompleta })

    const resposta = await fetch(urlCompleta);
    console.log({ resposta })
    return extrairDados(resposta);
  }, []);

  const httpPost = useCallback(async function (caminho: string, body?: any) {
    const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const urlCompleta = `${urlBase}${uri}`;
    console.log({ urlCompleta })

    const resposta = await fetch(urlCompleta, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });
    console.log({ resposta });
    return extrairDados(resposta);
  }, []);

  async function extrairDados(response: Response) {
    let conteudo: any;

    try {
      conteudo = await response.json();
    } catch (error) {
      if (!response.ok) {
        throw new Error(
          `Ocorreu um erro inesperado com status ${response.status}. Detalhe do erro ${error}`
        );
      }
      return null;
    }
    if (!response.ok) throw conteudo;
    return conteudo;
  }

  return { httpGet, httpPost };
}
