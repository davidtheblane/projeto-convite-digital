import { v4 as uuid, validate } from "uuid";
export default class Id {
  static novo(): number {
    return parseInt(uuid().split('-')[0], 16);
  }

  static valido(id: string): boolean {
    return validate(id);
  }
}
