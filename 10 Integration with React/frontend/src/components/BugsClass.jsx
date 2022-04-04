import React, { Component } from "react";
import { connect } from "react-redux";
import { loadBugs, removeBug } from "./../store/bugs";

class BugsClass extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  render() {
    const { bugs, removeBug } = this.props;

    return (
      <div>
        <h2>Bugs Class Component</h2>
        <ul>
          {bugs.map((bug) => (
            <li key={bug.id}>
              {bug.description}
              <button title="Remove Bug" onClick={() => removeBug(bug.id)}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// bugs: state.entities.bugs.list
const mapStateToProps = (state) => ({
  bugs: state.entities.bugs.list,
});

const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
  removeBug: (id) => dispatch(removeBug(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BugsClass);
