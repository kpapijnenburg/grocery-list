import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { TableRow, TableCell, Tab } from "@material-ui/core";

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
      <TableRow key={id}>
        <TableCell padding="checkbox">
          <Checkbox
            onChange={this.toggleChange}
            checked={this.state.isChecked}
            color="default"
          />
        </TableCell>
        <TableCell>
          <p className={classes}>{name}</p>
        </TableCell>
        <TableCell>
          {" "}
          <p>{amount}</p>
        </TableCell>
        <TableCell>
          <Button text="+" variant="outlined" onClick={() => onIncrement(id)}>
            {" "}
            +{" "}
          </Button>
        </TableCell>
        <TableCell>
          <Button variant="outlined" onClick={() => onDecrement(id)}>
            {" "}
            -{" "}
          </Button>
        </TableCell>
        <TableCell>
          <Button variant="outlined" onClick={() => onDelete(id)}>
            {" "}
            X{" "}
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default Item;
