import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { TableRow, TableCell } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTrash,
  faAngleUp,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <Button variant="outlined" onClick={() => onDecrement(id)}>
            <FontAwesomeIcon icon={faMinus} />
          </Button>
          <Button variant="outlined" onClick={() => onDelete(id)}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </TableCell>
        <TableCell>
          <Button>
            <FontAwesomeIcon icon={faAngleUp} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faAngleDown} />
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default Item;
