import store from "./store";

// Subscribing to store
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed: ", store.getState());
});

// Adding a bug
store.dispatch({
  type: "bugAdded",
  payload: {
    description: "UI Bug.",
  },
});

unsubscribe();

// Deleting a bug
store.dispatch({
  type: "bugRemoved",
  payload: { id: 1 },
});
