import { action } from "typesafe-actions";
import { TopProductsTypes, TopProducts } from "./types";

export const loadRequest = () => action(TopProductsTypes.LOAD_REQUEST);

export const loadSuccess = (data: TopProducts[]) =>
  action(TopProductsTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(TopProductsTypes.LOAD_FAILURE);
