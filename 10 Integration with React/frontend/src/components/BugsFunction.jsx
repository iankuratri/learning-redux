import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBugs } from "./../store/bugs";

export default function BugsFunction() {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.entities.bugs.list);

  useEffect(() => {
    dispatch(loadBugs());
  });

  return (
    <div>
      <h2>Bugs Function Component</h2>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>{bug.description}</li>
        ))}
      </ul>
    </div>
  );
}
