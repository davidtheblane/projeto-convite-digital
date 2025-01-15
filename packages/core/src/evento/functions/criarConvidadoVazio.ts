import { Id } from "../../shared";
import { IGuest } from "core";

export default function criarConvidadoVazio(): Partial<IGuest> {
  return {
    name: "",
    email: "",
    events: [],
  };
}
