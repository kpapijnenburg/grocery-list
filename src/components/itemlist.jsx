import React, { Component } from "react";
import Item from "./item";

class ItemList extends Component {
  render() {
    const { items, onDelete, onIncrement, onDecrement, onChecked } = this.props;
    return items.map(item => (
      <Item
        key={item.id}
        id={item.id}
        name={item.name}
        amount={item.amount}
        onDelete={onDelete}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onChecked={onChecked}
      />
    ));
  }
}

export default ItemList;
