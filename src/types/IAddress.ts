export default interface Address {
  id?: string;
  publicPlace: string;
  neighborhood: string;
  zipCode: string;
  city: string;
  state: string;
  complement?: string;
  number: string;
}
