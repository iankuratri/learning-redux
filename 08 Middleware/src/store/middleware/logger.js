const logger = (state) => (next) => (action) => {
  console.log("state: ", state);
  console.log("next: ", next);
  console.log("action: ", action);

  next(action);
};

export default logger;
