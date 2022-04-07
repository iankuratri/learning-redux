import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../store/iceCream/iceCreamActions";

function CakeContainer({ numberOfIceCream, buyIceCream }) {
  return (
    <div>
      <h2>Number of cakes: {numberOfIceCream}</h2>
      <button onClick={buyIceCream}>Buy cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numberOfIceCream: state.iceCream.numberOfIceCream,
});

const mapDispatchToProps = (dispatch) => ({
  buyIceCream: () => dispatch(buyIceCream()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
