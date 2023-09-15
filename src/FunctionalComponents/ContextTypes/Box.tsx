import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Box() {
  const theme = useContext(ThemeContext);
  return <div style={{ background: theme.primary.main }}>Themed Box</div>;
}
export default Box;
