import React from "react";
import "./App.css";
import BugsClass from "./components/BugsClass";
import BugsFunction from "./components/BugsFunction";
import configureStore from "./store/configureStore";
// import StoreContext from "./contexts/storeContext";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <main>
        <BugsClass />
        <div className="vl"></div>
        <BugsFunction />
      </main>
    </Provider>
  );
}

export default App;
