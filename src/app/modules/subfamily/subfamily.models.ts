import {IFamily} from "../family/family.models";

export interface ISubFamily {
  id?: number;
  createdAt: Date;
  name: string;
  family: IFamily;
}
