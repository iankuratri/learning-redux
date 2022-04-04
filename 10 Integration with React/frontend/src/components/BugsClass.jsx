import React, { Component } from "react";
import StoreContext from "../contexts/storeContext";
import { loadBugs } from "../store/bugs";

export default class BugsClass extends Component {
  static contextType = StoreContext;

  state = {
    bugs: [],
  };

  componentDidMount() {
    const store = this.context;

    this.unsubscribe = store.subscribe(() => {
      const { list: bugsInStore } = store.getState().entities.bugs;
      const { bugs: bugsInState } = this.state;

      if (bugsInState !== bugsInStore) {
        this.setState({
          bugs: bugsInStore,
        });
      }
    });

    store.dispatch(loadBugs());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { bugs } = this.state;

    return (
      <div>
        <h2>BugsClass</h2>
        <ul>
          {bugs.map((bug) => (
            <li key={bug.id}>{bug.description}</li>
          ))}
        </ul>
      </div>
    );
  }
}
