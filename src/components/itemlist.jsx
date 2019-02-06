import React, { Component } from "react";
import Item from "./item";
import TableRow from "@material-ui/core/TableRow";

class ItemList extends Component {
  render() {
    const { items, onAdd, onDelete, onIncrement, onDecrement } = this.props;
    return items.map(item => (
      <Item
        key={item.id}
        id={item.id}
        name={item.name}
        amount={item.amount}
        onAdd={onAdd}
        onDelete={onDelete}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    ));
  }
}

export default ItemList;
