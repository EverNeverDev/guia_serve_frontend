import IOffer from "./IOffer";
import IUser from "./IUser";

export default interface IProvider {
  id?: string;
  bio: string;
  status: string;
  planId: string;
  userId: string;
  user: IUser;
  servicesIds?: string[];
  offers?: IOffer[];
  starRating: number;
  moneyRating: number;
}
