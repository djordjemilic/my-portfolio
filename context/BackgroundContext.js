import { useContext, createContext, useState } from "react";

const Context = createContext({
  background: false,
  setBackground: () => {},
});

const BackgroundContext = ({ children }) => {
  const [background, setBackground] = useState(true);

  const value = { background, setBackground };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useBackground = () => useContext(Context);

export default useBackground;
export { BackgroundContext, useBackground };
