import { createContext, useState } from "react";

export const ModalDisplayContext = createContext();

export const ModalDisplayProvider = ({ children }) => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    console.log("clicked!!!");
    setDisplay((prevState) => (prevState === false ? true : false));
  };

  return (
    <ModalDisplayContext.Provider value={{ display, handleDisplay }}>
      {children}
    </ModalDisplayContext.Provider>
  );
};
