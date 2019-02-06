import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Toolbar extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { onAdd } = this.props;

    return (
      <div>
        <br />
        <TextField
          placeholder="Type here..."
          margin="normal"
          fullWidth={true}
          type="text"
          onChange={this.handleChange}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          fullWidth={true}
          onClick={() => onAdd(this.state.value)}
        >
          Add
        </Button>
        <hr />
      </div>
    );
  }
}

export default Toolbar;
