import { IGuest } from "./Guest";
import { IOffer } from "./Offer";
import { IUser } from "./User";

// Interface para Event
export interface IEvent {
  alias: string;
  password: string;
  name: string;
  description?: string;
  local: string;
  address?: string;
  monetize: boolean;
  keyPix?: string;
  image: string;
  imageBackground: string;
  expectedAudience: number;
  startDate: Date;
  endDate?: Date;
  createAt: Date;
  updateAt: Date;
  userId: number;
  user?: IUser;
  guests?: IEventGuest[];
  offers?: IEventOffer[];
}

// Interface para EventOffer (relação entre Event e Offer)
export interface IEventOffer {
  id: number;
  eventId: number;
  offerId: number;
  event?: IEvent;
  offer?: IOffer;
  EventGuest?: IEventGuest[];
}

// Interface para EventGuest (relação entre Event e Guest)
export interface IEventGuest {
  id: number;
  status: StatusPresence;
  companions: number;
  offerValue?: number;
  offerQuantity?: number;
  createAt: Date;
  updateAt: Date;
  eventId: number;
  guestId: number;
  eventOfferId?: number;
  event?: IEvent;
  guest?: IGuest;
  eventOffer?: IEventOffer;
}

// Enum para StatusPresence
export enum StatusPresence {
  CONFIRMED = "CONFIRMED",
  REFUSED = "REFUSED",
  PENDING = "PENDING"
}
