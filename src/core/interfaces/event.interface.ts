export interface IEvent {
  id: number;
  alias: string;
  password?: string;
  name: string;
  description?: string;
  local: string;
  address?: string | null;
  monetize: boolean;
  keyPix?: string;
  linkGifts?: string;
  image: string;
  imageBackground: string;
  expectedAudience?: number;
  startDate: Date;
  endDate: Date | null;
  createAt: string;
  updateAt: string;
  userId: number;
  guests: IGuestEvent[];
}

export interface IGuest {
  id: number;
  name: string;
  email: string;
  createAt: string;
  updateAt: string;
}

export interface IGuestEvent {
  id: number;
  status: "CONFIRMED" | "REFUSED" | "PENDING";
  companions: number;
  offerValue: number;
  offerQuantity: number;
  createAt: string;
  updateAt: string;
  eventId: number;
  guestId: number;
  eventOfferId: number;
  guest: IGuest;
}

export const StatusPresence: Record<string, string> = {
  CONFIRMED: "Confirmado",
  REFUSED: "Recusado",
  PENDING: "Pendente",
};
