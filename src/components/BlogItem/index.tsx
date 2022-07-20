import { NavLink } from "react-router-dom";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./styles.module.scss";
interface BlogItemProps {
  title: string;
  slug: string;
  excerpt?: string | null;
  createdAt: Date;
  imageItem?: { url: string } | any;
}

export function BlogItem(props: BlogItemProps) {
  const dateFormatted = format(
    props.createdAt as Date,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  return (
    <div className={styles.Content}>
      <NavLink to={props.slug}>
        <div className={styles.ImageContainer}>
          <img src={props.imageItem?.url} />
        <div className={styles.TextContainer}>
          <h1>
            {" "}
            <strong> {props.title} </strong>
          </h1>
          <p> {props.excerpt} </p>
          <span>
            {" "}
            <strong> Postado </strong> {dateFormatted}{" "}
          </span>
          </div>
          </div>
      </NavLink>
    </div>
  );
}
