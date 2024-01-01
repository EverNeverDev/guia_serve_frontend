import IService from "./IService";

export default interface ICategory {
  id?: string;
  description: string;
  image: string;
  servicesIds?: string[];
  services?: IService[];
  parentCategoryId: string;
  parentCategory: ICategory;
}
