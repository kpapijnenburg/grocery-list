import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Toolbar extends Component {
  state = {
    value: ""
  };

  onAdd(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
    console.log(this.state);
  }

  render() {
    const { onAdd } = this.props;
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input onClick={this.onAdd} type="submit" value="Submit" />
      </form>
      // <div>
      //   <br />
      //   <TextField
      //     placeholder="Type here..."
      //     margin="normal"
      //     fullWidth={true}
      //     type="text"
      //   />
      //   <br />
      //   <Button
      //     variant="contained"
      //     color="primary"
      //     fullWidth={true}
      //     onClick={onAdd}
      //   >
      //     Add
      //   </Button>
      //   <hr />
      // </div>
    );
  }
}

export default Toolbar;
