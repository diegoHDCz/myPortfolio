import {
  SiLaravel,
  SiAngular,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiGraphql,
  SiDocker,
  SiSpringboot,
  SiJava,
} from "react-icons/si";

import { Card } from "../Card";
import styles from "./styles.module.scss";

export function Skills() {
  return (
    <>
      <section className={styles.skillsContainer}>
        <h3>Linguagens & Tecnologias</h3>
        <div className={styles.skillsContent}>
          <Card title="Angular" icon={SiAngular} />
          <Card title="React" icon={SiReact} />
          <Card title="VueJS" icon={SiVuedotjs} />
          <Card title="NodeJS" icon={SiNodedotjs} />
          <Card title="SQL" icon={SiMysql} />
          <Card title="NoSQL" icon={SiMongodb} />
          <Card title="Spring" icon={SiSpringboot} />
          <Card title="GraphQL" icon={SiGraphql} />
          <Card title="Docker" icon={SiDocker} />
          <Card title="Java" icon={SiJava} />
        </div>
      </section>
    </>
  );
}
