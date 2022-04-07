import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../store/iceCream/iceCreamActions";

function IceCreamContainer() {
  const numberOfIceCream = useSelector(
    (state) => state.iceCream.numberOfIceCream
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of icecream: {numberOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy icecream</button>
    </div>
  );
}

export default IceCreamContainer;
