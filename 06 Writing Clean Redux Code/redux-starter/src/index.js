import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";

const store = configureStore();

// Subscribing to store
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed: ", store.getState());
});

// Adding a bug
store.dispatch(actions.bugAdded("UI Bug 1."));
store.dispatch(actions.bugAdded("UI Bug 2."));
store.dispatch(actions.bugAdded("UI Bug 3."));

// Resolving a bug
store.dispatch(actions.bugResolved(1));

// Deleting a bug
store.dispatch(actions.bugRemoved(1));

unsubscribe();
