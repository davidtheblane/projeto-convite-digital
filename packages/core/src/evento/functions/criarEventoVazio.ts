import { Id } from "../../shared";
import { IEvent } from "../model/Event";

export default function criarEventoVazio(): Partial<IEvent> {
  return {
    id: Id.novo(),
    name: "",
    description: "",
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
