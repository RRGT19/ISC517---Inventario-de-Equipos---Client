export interface IClient {
  id?: number;
  createdAt: Date;
  identification: string;
  name: string;
  phone: string;
  photo: string | null;
}
