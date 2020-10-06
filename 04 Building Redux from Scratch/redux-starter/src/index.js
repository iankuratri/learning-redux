import store from "./customStore";
import * as actions from "./actionCreators";

// Subscribing to store
store.subscribe(() => {
  console.log("Store Changed: ", store.getState());
});

// Adding a bug
store.dispatch(actions.bugAdded("UI Bug."));

// Resolving a bug
store.dispatch(actions.bugResolved(1));

// Deleting a bug
store.dispatch(actions.bugRemoved(1));

// console.log(store.getState());
