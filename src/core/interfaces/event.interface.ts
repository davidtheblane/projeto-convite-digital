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
  image: string;
  imageBackground: string;
  expectedAudience?: number;
  startDate: Date;
  endDate: Date | null;
  createAt: string;
  updateAt: string;
  // userId: number;
}
