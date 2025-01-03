import { IEventOffer } from "./Event";

// Interface para IOffer
export interface IOffer {
    id: number;
    name: string;
    description?: string;
    value?: number;
    createAt: Date;
    updateAt: Date;
    events?: IEventOffer[];
}
