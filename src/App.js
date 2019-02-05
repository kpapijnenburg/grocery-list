import React, { Component } from "react";
import "./App.css";
import List from "./components/list";
import Toolbar from "./components/toolbar";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    items: [{ id: 1, name: "item", amount: 1 }]
  };

  handleIncrement = item => {
    console.log("handleIncrement", item);
  };

  handleDecrement = item => {
    console.log("handleDecrement", item);
  };

  handleDelete = item => {
    console.log("handleDelete", item);
  };

  handleAdd = item => {
    console.log("handleAdd", item);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Toolbar onAdd={this.handleAdd} />
          <List
            items={this.state.items}
            onIcrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
