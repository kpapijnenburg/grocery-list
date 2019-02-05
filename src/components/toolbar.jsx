import React, { Component } from "react";

class Toolbar extends Component {
  state = {};

  render() {
    const { onAdd } = this.props;

    return (
      <div>
        <input className="form-control" type="text" />
        <button
          onClick={onAdd}
          type="button"
          className="btn btn-primary btn-block"
        >
          Add
        </button>
      </div>
    );
  }
}

export default Toolbar;
