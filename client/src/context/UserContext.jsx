import { createContext } from "react";

export const UserContext = createContext([]);

export const UserContextProvider = ({ children }) => {
  const users = [
    {
      id: 1,
      username: "Kamini",
    },
    {
      id: 2,
      username: "Damini",
    },
    {
      id: 3,
      username: "Padmini",
    },
  ];

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};
