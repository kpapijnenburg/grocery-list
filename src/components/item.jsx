import React, { Component } from "react";

class Item extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <input type="checkbox" />
        <label htmlFor="">
          {this.props.name}: {this.props.amount}
        </label>
        <button
          onClick={() => this.props.onIncrement(this.props.item)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.item)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.item.id)}
          className="btn btn-danger btn-sm m-2"
        >
          x
        </button>
      </div>
    );
  }
}

export default Item;
