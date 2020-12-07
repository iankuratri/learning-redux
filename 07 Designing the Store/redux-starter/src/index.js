import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
} from "./store/bugs";
import { projectAdded, projectRemoved } from "./store/projects";

const store = configureStore();

// Subscribing to store
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed: ", store.getState());
});

// Adding bug
store.dispatch(bugAdded({ description: "UI Bug 1." }));
store.dispatch(bugAdded({ description: "UI Bug 2." }));
store.dispatch(bugAdded({ description: "UI Bug 3." }));

// Resolving a bug
store.dispatch(bugResolved({ id: 1 }));

// Deleting a bug
store.dispatch(bugRemoved({ id: 1 }));

// Adding project
store.dispatch(projectAdded({ name: "My Project 1" }));
store.dispatch(projectAdded({ name: "My Project 2" }));

// Deleting project
store.dispatch(projectRemoved({ id: 1 }));

unsubscribe();

const unresolvedBugs = getUnresolvedBugs(store.getState());
console.log("unresolvedBugs: ", unresolvedBugs);
