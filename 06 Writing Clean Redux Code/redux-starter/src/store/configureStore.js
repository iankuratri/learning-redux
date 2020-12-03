import { createStore } from "redux";
import reducer from "./bugs";
import { devToolsEnhancer } from "redux-devtools-extension";

export default function configureStore() {
  const state = createStore(reducer, devToolsEnhancer({ trace: true }));
  return state;
}
