import { useEffect, useState } from "react";

type User = {
  name: string;
  age: number;
};
function UseStateTypes() {
  const [user, setUser] = useState<User | null>({} as User);
  useEffect(() => {
    setUser({ name: "Raja", age: 24 });
  }, []);
  return <div>UseStateTypes</div>;
}
export default UseStateTypes;
