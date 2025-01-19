import { IGuest } from "../model/Guest";

export default function criarConvidadoVazio(): Partial<IGuest> {
  return {
    name: "",
    email: "",
    events: [],
  };
}
