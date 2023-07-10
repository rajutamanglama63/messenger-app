import { createContext, useEffect, useState } from "react";
import { signupService } from "../services/authService";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [resData, setResData] = useState();
  console.log("I am called.....");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //     const data = await signupService();
  //     console.log("data from context: ", data);
  //     setResData(data);
  //     } catch (error) {
  //       console.log("err from context: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <AuthContext.Provider value={resData}>{children}</AuthContext.Provider>
  );
};
