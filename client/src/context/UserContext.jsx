import { createContext } from "react";

export const UserContext = createContext([]);

export const UserContextProvider = ({ children }) => {
  const users = [
    {
      id: 1,
      username: "Padmini",
    },
    {
      id: 2,
      username: "Daamenee",
    },
    {
      id: 3,
      username: "Padmawoti",
    },
    {
      id: 3012102,
      username: "Padmawoti",
    },
    {
      id: 4,
      username: "Padmawoti",
    },
    {
      id: 5,
      username: "Padmawoti",
    },
    {
      id: 6,
      username: "Padmawoti",
    },
    {
      id: 7,
      username: "Padmawoti",
    },
    {
      id: 8,
      username: "Padmawoti",
    },
    {
      id: 9,
      username: "Padmawoti",
    },
    {
      id: 10,
      username: "Padmawoti",
    },
    {
      id: 11,
      username: "Padmawoti",
    },
    {
      id: 12,
      username: "Padmawoti",
    },
    {
      id: 13,
      username: "Padmawoti",
    },
    {
      id: 14,
      username: "Padmawoti",
    },
    {
      id: 15,
      username: "Padmawoti",
    },
  ];

  // const [user, setUser] =

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};
