/*
 * Actions types
 */

export enum TopProductsTypes {
  LOAD_REQUEST = "@topProducts/LOAD_REQUESTE",
  LOAD_SUCCESS = "@topProducts/LOAD_SUCCESS",
  LOAD_FAILURE = "@topProducts/LOAD_FAILURE",
}

/**
 * Data types
 */
export interface TopProducts {
  id: Number;
  name: String;
}

/*
 * State Type
 */
export interface TopProductsState {
  readonly data: TopProducts[];
  readonly loading: Boolean;
  readonly error: Boolean;
}
