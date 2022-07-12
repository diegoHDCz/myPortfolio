import { useState } from "react";
import styles from "./styles.module.scss";
interface CardProjectsProps {
  title: string;
  url_link: string;
  descripion: string;
}
export function Cardprojects({
  title,
  url_link,
  descripion,
}: CardProjectsProps) {
  const [isShown, setIsShown] = useState(false);


  return (
    <a target="_blank" href={url_link}>
      <div
        className={styles.Container}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <h1>{title}</h1>
        {isShown ? <p>Clique para visitar a página</p> : <p>{descripion}</p>}
      </div>
    </a>
  );
}
