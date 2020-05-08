import { Reducer } from "redux";
import { TopProductsState, TopProductsTypes } from "./types";

const INITIAL_STATE: TopProductsState = {
  data: [
    { id: 1, name: "Gustavo" },
    { id: 2, name: "PES" },
  ],
  error: false,
  loading: false,
};

const reducer: Reducer<TopProductsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TopProductsTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case TopProductsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case TopProductsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };

    default:
      return state;
  }
};

export default reducer;
