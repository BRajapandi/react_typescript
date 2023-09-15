import React, { Component, FormEvent } from "react";

export default class Events extends Component {
  handleChange = (e: FormEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.value);
  };
  render() {
    return (
      <div>
        <input value="Raja" onChange={this.handleChange} />
        <button>Hiii</button>
      </div>
    );
  }
}
