import React from "react";

import ProductsList from "./components/productsList";
import { Provider } from "react-redux";
import store from "./store";

//import Screen
import HomeScreen from "./Screen/Home";

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
      {/* <div className="App">
        <ProductsList />
      </div> */}
    </Provider>
  );
}

export default App;
