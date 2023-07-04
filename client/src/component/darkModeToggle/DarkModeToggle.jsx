import React, { useContext, useState } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "../../context/DarkModeToggle";

const DarkModeToggle = () => {
  const { mode, toggle } = useContext(ThemeContext);
  // const [toggle, setToggle] = useState(false);

  // const setDarkMode = () => {
  //   document.querySelector("body").setAttribute("data-theme", "dark");
  // };

  // const setLightMode = () => {
  //   document.querySelector("body").setAttribute("data-theme", "light");
  // };

  // const toggleTheme = () => {
  //   if (!toggle) {
  //     setDarkMode();
  //   } else {
  //     setLightMode();
  //   }
  //   setToggle(() => !toggle);
  // };
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
