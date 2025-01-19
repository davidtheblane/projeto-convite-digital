import { Senha } from "../../shared";
import { IEvent } from "../model/Event";

export default function criarEventoVazio(): Partial<IEvent> {
  return {
    name: "",
    description: "",
    password: Senha.nova(10),
    startDate: new Date(),
    local: "",
    address: "",
    expectedAudience: 1,
    image: "",
    keyPix: "",
    monetize: false,
    imageBackground: "",
  };
}
