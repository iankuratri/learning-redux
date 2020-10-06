import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actionCreators";

// Subscribing to store
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed: ", store.getState());
});

// Adding a bug
store.dispatch(bugAdded("UI Bug."));

// Resolving a bug
store.dispatch(bugResolved(1));

// Deleting a bug
store.dispatch(bugRemoved(1));

unsubscribe();
