import React, { Component } from "react";

type StudentState = {
  name: String;
  age: number;
};

type StudentsReport = {
  studentReport: StudentState[];
};

{
  /*
type arrayOfObject={
    names:{
        first:string;
        last:string;
    }[]
}

*/
}
export default class ArrayOfObject extends Component<{}, StudentsReport> {
  state: Readonly<StudentsReport> = {
    studentReport: [{ name: "Raja", age: 9 }],
  };
  render() {
    return <div>ArrayOfObject</div>;
  }
}
