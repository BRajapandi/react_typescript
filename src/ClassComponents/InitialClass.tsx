import React, { Component } from "react";
interface StudentState {
  name: string;
  age: number;
}
type StudentProps = {
  name: string;
  age: number;
  onClick: () => void;
};
export default class InitialClass extends Component<
  StudentProps,
  StudentState
> {
  constructor(props: any) {
    super(props);
    this.state = { name: "", age: 0 };
  }

  //   to Set the State only
  /*
state:ReadOnly<StudentsState>={
    name:"",age:0
}
*/
  handleClick = () => {};
  render(): JSX.Element {
    return <div onClick={this.handleClick}>{this.state.name}</div>;
  }
}
