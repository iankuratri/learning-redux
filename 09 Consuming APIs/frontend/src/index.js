import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded, projectRemoved } from "./store/projects";
import { userAdded, userRemoved } from "./store/users";
import { loadBugs, addBug, resolveBug, assignBugToUser } from "./store/bugs";

const store = configureStore();

// Subscribing to store
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed: ", store.getState());
});

/*

// Adding users
store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));

// Adding bugs
store.dispatch(bugAdded({ description: "UI Bug 1." }));
store.dispatch(bugAdded({ description: "UI Bug 2." }));
store.dispatch(bugAdded({ description: "UI Bug 3." }));

// Assigning bug to a user
store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));

// Resolving a bug
store.dispatch(bugResolved({ id: 1 }));

// Deleting a bug
store.dispatch(bugRemoved({ id: 1 }));

// Adding project
store.dispatch(projectAdded({ name: "My Project 1" }));
store.dispatch(projectAdded({ name: "My Project 2" }));

// Deleting project
store.dispatch(projectRemoved({ id: 1 }));


store.dispatch((dispatch, getState) => {
  dispatch({ type: "bugsReceived", bugs: [1, 2, 3, 4] });
});

store.dispatch({
  type: "error",
  payload: { message: "This is a test Error." },
});


const unresolvedBugs = getUnresolvedBugs(store.getState());
console.log("unresolvedBugs: ", unresolvedBugs);

const userBugs = getBugsByUser(1)(store.getState());
console.log("userBugs :", userBugs);


// 1st api call
store.dispatch(loadBugs());

// 2nd api call after 1 sec
setTimeout(() => {
  store.dispatch(loadBugs());
}, 1000);


store.dispatch(addBug({ description: "my new bug." }));


// resolving a bug
setTimeout(() => {
  store.dispatch(resolveBug(3));
}, 2000);

*/

store.dispatch(loadBugs());

// assigning a bug
setTimeout(() => {
  store.dispatch(assignBugToUser(1, 3));
}, 2000);

unsubscribe();
