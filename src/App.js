import React from "react";
import { Provider } from "react-redux";
import store from "./Common/Store/Store";
import GetApi from "./Components/GetApi/GetIpi";

function App() {
  return (
    <Provider store={store}>
      <GetApi />
    </Provider>
  );
}

export default App;
