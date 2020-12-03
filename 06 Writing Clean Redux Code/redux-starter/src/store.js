import { createStore } from "redux";
import reducer from "./reducer";
import { devToolsEnhancer } from "redux-devtools-extension";

const state = createStore(reducer, devToolsEnhancer({ trace: true }));

export default state;
