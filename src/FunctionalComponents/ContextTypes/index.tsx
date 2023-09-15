import Box from "./Box";
import { ThemecontextProvider } from "./ThemeContext";

function Index() {
  return (
    <div>
      <ThemecontextProvider>
        <Box />
      </ThemecontextProvider>
    </div>
  );
}
export default Index;
