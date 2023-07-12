import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
// import { AuthContext } from "./context/AuthContext";

const Router = () => {
  const [serverResponse, setServerResponse] = useState({});
  // const responsedData = useContext(AuthContext);
  // console.log("res data: ", responsedData);
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route
          path="signup"
          element={
            <Signup
              serverResponse={serverResponse}
              setServerResponse={setServerResponse}
            />
          }
        />
        <Route
          path="signin"
          element={
            <Signin
              serverResponse={serverResponse}
              setServerResponse={setServerResponse}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
