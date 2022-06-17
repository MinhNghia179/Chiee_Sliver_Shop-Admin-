import { AccountModel } from "./AccountModel";

export interface ListAccountModel {
  results: AccountModel[];
  total: number;
}