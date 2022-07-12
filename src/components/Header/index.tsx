import { Logo } from "../Logo";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
export function Header() {
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
