export interface IUser {
  id?: number;
  createdAt: Date;
  username: string;
  name: string;
  lastName: string;
  active: boolean;
  roles: IRole[];
  token?: string;
}

export interface IRole {
  id: number;
  role: string;
}
