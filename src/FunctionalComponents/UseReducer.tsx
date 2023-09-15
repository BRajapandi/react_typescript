import { useReducer } from "react";

type CounterStaet = {
  count: number;
};
type Updateaction = {
  type: "increment" | "decrement";
  payload: number;
};
type ResetAction = {
  type: "reset";
};
type CounterAction = Updateaction | ResetAction;
// type CounterAction = {
//   type: "increment" | "decrement" | "reset";
//   payload: number;
// };
const reducer = (state: CounterStaet, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

let initialState = { count: 0 };
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div>UseReducer</div>;
}
export default UseReducer;
