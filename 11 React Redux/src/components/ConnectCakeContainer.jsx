import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../store/cake/cakeActions";

function CakeContainer({ numberOfCakes, buyCake }) {
  return (
    <div>
      <h2>Number of cakes: {numberOfCakes}</h2>
      <button onClick={buyCake}>Buy cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numberOfCakes: state.cake.numberOfCakes,
});

const mapDispatchToProps = (dispatch) => ({
  buyCake: () => dispatch(buyCake()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
