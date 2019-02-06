import React, { Component } from "react";
import "./App.css";
import ItemList from "./components/itemlist";
import Toolbar from "./components/toolbar";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Banaan", amount: 1 },
      { id: 2, name: "Appel", amount: 1 },
      { id: 3, name: "Peer", amount: 1 },
      { id: 4, name: "Kers", amount: 1 }
    ]
  };

  constructor(props) {
    super(props);
  }

  handleIncrement = id => {
    this.setState(
      this.state.items.map(i =>
        i.id !== id ? i : { id: id, name: i.name, amount: i.amount++ }
      )
    );
  };

  handleDecrement = id => {
    const item = this.state.items.find(i => i.id === id);

    if (item.amount > 0) {
      this.setState(
        this.state.items.map(i =>
          i.id !== id ? i : { id: id, name: i.name, amount: i.amount-- }
        )
      );
    }
  };

  handleDelete = id => {
    const items = this.state.items.filter(i => i.id !== id);
    this.setState({ items });
  };

  handleAdd = itemName => {
    const { items } = this.state;
    const item = { id: items.length + 1, name: itemName, amount: 1 };
    items.push(item);
    this.setState({ items });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Toolbar onAdd={this.handleAdd} />
          <ItemList
            items={this.state.items}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
