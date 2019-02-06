import React, { Component } from "react";
import "./App.css";
import ItemList from "./components/itemlist";
import Toolbar from "./components/toolbar";
import NavBar from "./components/navbar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Banaan", amount: 1 },
      { id: 2, name: "Appel", amount: 1 },
      { id: 3, name: "Peer", amount: 1 },
      { id: 4, name: "Kers", amount: 1 }
    ]
  };

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

  handleChecked = id => {
    console.log(id);
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
          <Table padding="dense">
            <TableHead>
              <TableCell> </TableCell>
              <TableCell> Name </TableCell>
              <TableCell> Amount </TableCell>
              <TableCell> </TableCell>
              <TableCell> </TableCell>
            </TableHead>
            <TableBody>
              <ItemList
                items={this.state.items}
                onChecked={this.handleChecked}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
                onDecrement={this.handleDecrement}
              />
            </TableBody>
          </Table>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
