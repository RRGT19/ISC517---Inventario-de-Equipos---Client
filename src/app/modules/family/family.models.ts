import {ISubFamily} from "../subfamily/subfamily.models";

export interface IFamily {
  id?: number;
  createdAt: Date;
  name: string;
  subFamilies?: ISubFamily[];
}
