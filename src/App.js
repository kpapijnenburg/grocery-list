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
      { id: 1, name: "Banaan", amount: 1, isChecked: false },
      { id: 2, name: "Appel", amount: 1, isChecked: false },
      { id: 3, name: "Peer", amount: 1, isChecked: false },
      { id: 4, name: "Kers", amount: 1, isChecked: false }
    ]
  };

  handleIncrement = id => {
    this.setState(
      this.state.items.map(i =>
        i.id !== id
          ? i
          : { id: id, name: i.name, amount: i.amount++, isChecked: i.isChecked }
      )
    );
  };

  handleDecrement = id => {
    const item = this.state.items.find(i => i.id === id);

    if (item.amount > 0) {
      this.setState(
        this.state.items.map(i =>
          i.id !== id
            ? i
            : {
                id: id,
                name: i.name,
                amount: i.amount--,
                isChecked: i.isChecked
              }
        )
      );
    }
  };

  handleDelete = id => {
    const items = this.state.items.filter(i => i.id !== id);
    this.setState({ items });
  };

  handleChecked = (id, state) => {
    const { items } = this.state;

    const newItems = items.map(function(item) {
      return item.id !== id
        ? item
        : {
            id: item.id,
            name: item.name,
            amount: item.amount,
            isChecked: !state
          };
    });

    this.setState({items: newItems });
  };

  handleAdd = itemName => {
    const { items } = this.state;

    const item = {
      id: items.length + 1,
      name: itemName,
      amount: 1,
      isChecked: false
    };

    items.push(item);

    this.setState({ items });
  };

  render() {
    const {items} = this.state;

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
                items={items}
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
