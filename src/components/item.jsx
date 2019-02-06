import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

class Item extends Component {
  state = {
    isChecked: false
  };

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    let classes = "";
    if (this.state.isChecked) classes = "checked";

    const { id, name, amount, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <Checkbox
          onChange={this.toggleChange}
          checked={this.state.isChecked}
          color="default"
        />
        <span className={classes}>
          {name}: {amount}
        </span>
        <Button onClick={() => onIncrement(id)}> + </Button>
        <Button onClick={() => onDecrement(id)}> - </Button>
        <Button onClick={() => onDelete(id)}> X </Button>
      </div>
    );
  }
}

export default Item;
