import React, { Component } from "react";

class Item extends Component {
  state = {
      name: "",
      amount: 0,
  };
  
  render() {
    return <p>Dit is een item</p>;
  }
}

export default Item;
