import { IconType } from "react-icons";
import styles from "./styles.module.scss";
interface CardProps {
  title: string;
  icon: IconType;
}

export function Card({ title, icon }: CardProps) {
  const Wrapper = icon;
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h4>{title}</h4>
        {<Wrapper size={48} />}
      </div>
    </div>
  );
}
