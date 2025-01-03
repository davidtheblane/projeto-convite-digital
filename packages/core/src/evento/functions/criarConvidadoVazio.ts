import { Id } from "../../shared";
import { IGuest } from "core";

export default function criarConvidadoVazio(): Partial<IGuest> {
  return {
    id: Id.novo(),
    name: "",
    email: "",
    events: [],
  };
}
