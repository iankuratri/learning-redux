let lastId = 1;

function reducer(state = [], action) {
  switch (action.key) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      return state;
  }
}
