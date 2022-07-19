import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { NavLink } from "react-router-dom";
import useWindowSize from "../../hooks/windowResize";
import { Logo } from "../Logo";
import styles from "./styles.module.scss";
export function Header() {
  const size = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      {size.width > 600 ? (
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
      ) : (
        <>
          <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
              <button onClick={toggleDrawer} className={styles.ButtonStyle}>
                <GiHamburgerMenu size={28} />
              </button>
              <div className={styles.Drawer}>
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                duration={700}
                size={150}
                style={{'background': 'black', 'display':'flex', 'flexDirection':'column','justifyContent':'flex-start', 'alignItems':'end', 'padding':'50px', 'margin':'0'}}
              >
                <nav className={styles.anchorLink} >
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
              </Drawer>
              </div>
            </div>
          </header>
        </>
      )}
    </>
  );
}
