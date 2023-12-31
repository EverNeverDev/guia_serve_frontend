import IAddress from "./IAddress";
import IProvider from "./IProvider";

export default interface IUser {
  id?: string;
  name: string;
  address: IAddress;
  deviceToken?: string;
  role: string;
  photo: string;
  cpf: string;
  provider?: IProvider;
  contact: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  isActive?: boolean;
}
