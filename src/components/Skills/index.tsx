import {
  SiLaravel,
  SiAngular,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiDocker,
  SiPython,
} from "react-icons/si";

import { Card } from "../Card";
import styles from "./styles.module.scss";

export function Skills() {
  return (
    <>
      <section className={styles.skillsContainer}>
        <h3>Linguagnes & Tecnologias</h3>
        <div className={styles.skillsContent}>
          <Card title="Angular" icon={SiAngular} />
          <Card title="React" icon={SiReact} />
          <Card title="VueJS" icon={SiVuedotjs} />
          <Card title="NodeJS" icon={SiNodedotjs} />
          <Card title="SQL" icon={SiPostgresql} />
          <Card title="NoSQL" icon={SiMongodb} />
          <Card title="Laravel" icon={SiLaravel} />
          <Card title="GraphQL" icon={SiGraphql} />
          <Card title="Docker" icon={SiDocker} />
          <Card title="Ptyhon" icon={SiPython} /> 
        </div>
      </section>
    </>
  );
}
