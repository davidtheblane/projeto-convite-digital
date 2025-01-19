import { IEvent } from "./Event";

// Interface para IUser
export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  createAt: Date;
  updateAt: Date;
  events?: IEvent[];
}
