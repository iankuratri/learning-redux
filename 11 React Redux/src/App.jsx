import "./App.css";
import CakeContainer from "./components/ConnectCakeContainer";
import IceCreamContainer from "./components/ConnectIceCreamContainer";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <main>
        <CakeContainer />
        <div className="vl"></div>
        <IceCreamContainer />
      </main>
    </Provider>
  );
}

export default App;
