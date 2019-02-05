import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

class Item extends Component {
  render() {
    const { id, name, amount, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <Checkbox color="default" />
        {name}: {amount}
        <Button onClick={() => onIncrement(id)}> + </Button>
        <Button onClick={() => onDecrement(id)}> - </Button>
        <Button onClick={() => onDelete(id)}> X </Button>
      </div>
      // <div>
      //   <input type="checkbox" />
      //   <label htmlFor="">
      //     {this.props.name}: {this.props.amount}
      //   </label>
      //   <button
      //     onClick={() => this.props.onIncrement(this.props.item)}
      //     className="btn btn-secondary btn-sm m-2"
      //   >
      //     +
      //   </button>
      //   <button
      //     onClick={() => this.props.onDecrement(this.props.item)}
      //     className="btn btn-secondary btn-sm m-2"
      //   >
      //     -
      //   </button>
      //   <button
      //     onClick={() => this.props.onDelete(this.props.item.id)}
      //     className="btn btn-danger btn-sm m-2"
      //   >
      //     x
      //   </button>
      // </div>
    );
  }
}

export default Item;
