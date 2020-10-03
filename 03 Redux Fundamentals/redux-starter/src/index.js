import store from "./store";
import { bugAdded, bugRemoved } from "./actionCreators";

// Subscribing to store
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed: ", store.getState());
});

// Adding a bug
store.dispatch(bugAdded("UI Bug."));

unsubscribe();

// Deleting a bug
store.dispatch(bugRemoved(1));
