import React from "react";
import "./App.css";
import BugsClass from "./components/BugsClass";
import BugsFunction from "./components/BugsFunction";
import configureStore from "./store/configureStore";
import StoreContext from "./contexts/storeContext";

const store = configureStore();

function App() {
  return (
    <StoreContext.Provider value={store}>
      <main>
        <BugsClass />
        <div className="vl"></div>
        <BugsFunction />
      </main>
    </StoreContext.Provider>
  );
}

export default App;
