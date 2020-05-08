import { createStore, Store } from "redux";
import { TopProductsState } from "./ducks/topProducts/types";

import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  topProducts: TopProductsState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
