import React, { useContext, useState } from "react";
import styles from "./darkModeToggle.module.css";
// import { ThemeContext } from "../../context/DarkModeToggle";

const DarkModeToggle = () => {
  // const { mode, toggle } = useContext(ThemeContext);
  const [mode, setMode] = useState("darkMode");

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = () => {
    if (mode === "darkMode") {
      setDarkMode();
    } else {
      setLightMode();
    }
    setMode((prev) => (prev === "darkMode" ? "lightMode" : "darkMode"));
  };
  return (
    <div className={styles.container} onClick={toggleTheme}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={selectedTheme === "dark" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
