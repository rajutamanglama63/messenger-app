import { createContext, useEffect, useState } from "react";
import { getUsersService } from "../services/userService";

export const UserContext = createContext([]);

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allUsers = await getUsersService();
        setUsers(allUsers);
      } catch (error) {
        console.log("err from user context: ", error);
      }
    };

    fetchData();
  }, []);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};
