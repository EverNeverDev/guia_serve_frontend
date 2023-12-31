import IService from "./IService";

export default interface IOffer {
  id?: string;
  providerId?: string;
  serviceId?: string;
  price: string;
  service: IService;
}
