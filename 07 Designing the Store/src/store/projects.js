import { createSlice } from "@reduxjs/toolkit";

// Actions and Reducer created using single function createSlice
let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },

    projectRemoved: (projects, action) => {
      const index = projects.findIndex(
        (project) => project.id === action.payload.id
      );
      projects.splice(index, 1);
    },
  },
});

export const { projectAdded, projectRemoved } = slice.actions;
export default slice.reducer;
