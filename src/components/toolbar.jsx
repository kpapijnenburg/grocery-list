import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Toolbar extends Component {
  state = {
    value: ""
  };

  onAdd(event){
    console.log(this.name.getText())
  }

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
          ref={x => this.name = x}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          fullWidth={true}
          onClick={() => this.onAdd(this.name.value)}
        >
          Add
        </Button>
        <hr />
      </div>
    );
  }
}

export default Toolbar;
