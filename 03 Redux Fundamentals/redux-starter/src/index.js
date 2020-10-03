import store from "./store";
import * as actions from "./actionTypes";

// Subscribing to store
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed: ", store.getState());
});

// Adding a bug
store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "UI Bug.",
  },
});

unsubscribe();

// Deleting a bug
store.dispatch({
  type: actions.BUG_REMOVED,
  payload: { id: 1 },
});
