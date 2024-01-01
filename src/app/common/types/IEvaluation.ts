import ICategory from "./ICategory";
import IProvider from "./IProvider";
import IService from "./IService";
import IUser from "./IUser";

export default interface IEvaluation {
  id?: string;
  categoryId: string;
  category?: ICategory;
  clientId: string;
  client?: IUser;
  providerId: string;
  provider?: IProvider;
  review: string;
  serviceId: string;
  service?: IService;
  starRating: number;
  moneyRating: number;
  anonymous?: boolean;
}
