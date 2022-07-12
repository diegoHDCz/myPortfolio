import { Logo } from "../Logo";
import styles from "./styles.module.scss";
import { NavLink, useLocation } from "react-router-dom";
export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
      
          <Logo />

          <nav>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              to="/projetos"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Projetos
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Blog
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
