import React, { Component } from "react";
import Item from "./item";

class ItemList extends Component {
  render() {
    const { items, onAdd, onDelete, onIncrement, onDecrement } = this.props;
    return items.map(item => (
      <Item
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
