import { createContext, useState } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};
type AuthUser = {
  name: string;
  age: number;
};
type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
// export const ThemeContext = createContext({} as UserContextType);

export const ThemeContext = createContext(theme);

export const ThemecontextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    // <ThemeContext.Provider value={{user, setUser }}>
    //   {children}
    // </ThemeContext.Provider>
  );
};
