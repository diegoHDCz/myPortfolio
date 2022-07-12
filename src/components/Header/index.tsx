import { Logo } from "../Logo";
import styles from "./styles.module.scss";
import { Link, useLocation } from "react-router-dom";
export function Header() {
 const {pathname}  = useLocation()
  
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <Logo />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/blog">Blog</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
