import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
// import { ThemeProvider } from "./context/DarkModeToggle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <ThemeProvider>
  <UserContextProvider>
    <Router>
      <App />
    </Router>
  </UserContextProvider>
  // </ThemeProvider>
);
