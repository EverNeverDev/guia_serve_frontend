import ICategory from "./ICategory";

export default interface IService {
  id?: string;
  description: string;
  price: string;
  image: string;
  categoryId: string;
  category?: ICategory;
}
