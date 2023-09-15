//

import { useState } from "react";

const InitialCmp: React.FC<{ name: String }> = (props): JSX.Element => {
  const [name, setName] = useState<string>("");
  return <div>InitialCmp</div>;
};
export default InitialCmp;
