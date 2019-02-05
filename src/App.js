import React, { Component } from "react";
import "./App.css";
import List from "./components/list";
import Toolbar from "./components/toolbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <List />
          <Toolbar />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
