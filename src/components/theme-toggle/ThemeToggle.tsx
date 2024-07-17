import { useState } from "react";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    darkMode
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={styles.themeToggle} onClick={toggleDarkMode}>
      <div
        className={`${styles.themeToggle__switch} ${
          darkMode ? styles["themeToggle__switch-dark"] : ""
        }`}
      ></div>

      <span
        className={`${styles["themeToggle__icon"]} ${styles["themeToggle__icon-light"]} material-symbols-outlined`}
      >
        light_mode
      </span>

      <span
        className={`${styles["themeToggle__icon"]} ${styles["themeToggle__icon-dark"]} material-symbols-outlined`}
      >
        dark_mode
      </span>
    </div>
  );
};

export default ThemeToggle;
