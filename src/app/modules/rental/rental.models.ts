import {IClient} from "../client/client.models";
import {IEquipment} from "../equipment/equipment.models";

export interface IRental {
  id?: number;
  createdAt: Date;
  status: string;
  cost: number;
  client: IClient;
  dateOfReturn: Date;
  rentedEquipments: {
    id: number;
    createdAt: Date;
    equipment: IEquipment;
    returned: boolean;
  }[];
}
