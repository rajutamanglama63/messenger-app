import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { ModalDisplayProvider } from "./context/ModalDisplayContext";
// import { ThemeProvider } from "./context/DarkModeToggle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <ThemeProvider>
  <ModalDisplayProvider>
    <UserContextProvider>
      <Router>
        <App />
      </Router>
    </UserContextProvider>
  </ModalDisplayProvider>
  // </ThemeProvider>
);
