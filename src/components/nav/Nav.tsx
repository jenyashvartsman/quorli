import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  const [activeScrollStyleClass, setActiveScrollStyleClass] =
    useState<string>("");

  const links = [
    "home",
    "about",
    "services",
    "testimonials",
    "pricing",
    "blogs",
    "contact us",
  ];

  useEffect(() => {
    window.addEventListener("scroll", updateNavBackground);

    return () => window.removeEventListener("scroll", updateNavBackground);
  }, []);

  const updateNavBackground = () => {
    const styleClass = window.scrollY > 20 ? styles["nav-scrolled"] : "";
    setActiveScrollStyleClass(styleClass);
  };

  return (
    <nav className={`${styles.nav} ${activeScrollStyleClass}`}>
      <div className={` ${styles.nav__container} container`}>
        <h3 className={styles.nav__logo}>Quorli</h3>

        <ul className={styles.nav__links}>
          {links.map((link) => (
            <li key={link}>
              <a className={styles.nav__link} href={`#${link}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
