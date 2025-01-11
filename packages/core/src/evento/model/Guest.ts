import { IEventGuest } from "./Event";

// Interface para IGuest
export interface IGuest {
  id: number;
  name: string;
  email?: string;
  createAt: Date;
  updateAt: Date;
  events?: IEventGuest[];
}
