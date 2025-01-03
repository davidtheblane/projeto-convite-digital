import { IGuest } from "core";

export default function validarConvidado(
  convidado: IGuest,
): string[] {
  const erros: string[] = [];

  if (!convidado.name) {
    erros.push("Nome é obrigatório");
  }

  if (!convidado.email) {
    erros.push("E-mail é obrigatório");
  }

  return erros;
}
