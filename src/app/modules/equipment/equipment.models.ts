import {ISubFamily} from "../subfamily/subfamily.models";

export interface IEquipment {
  id?: number;
  createdAt: Date;
  name: string;
  stock: number;
  priceByDay: number;
  subFamily: ISubFamily;
  photo: string | null;
}
