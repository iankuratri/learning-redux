import store from "./store";

// Adding a bug
store.dispatch({
  type: "bugAdded",
  payload: {
    description: "UI Bug.",
  },
});

console.log("Bug Added: ", store.getState());

// Deleting a bug

store.dispatch({
  type: "bugRemoved",
  payload: { id: 1 },
});

console.log("Bug Deleted: ", store.getState());
