import { useEffect } from "react";
import { Cardprojects } from "../../components/CardProjects";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
export function Developed() {
  return (
    <>
      <Header />
      <main className={styles.Container}>
        <header>
          <h1>Projetos desenvolvidos</h1>
        </header>
      </main>
      <section className={styles.Content}>
        <Cardprojects
          title="ignews"
          url_link="https://ignews-one-beta.vercel.app/"
          descripion="Projeto de estudo de assiantura mensal"
        />
        <Cardprojects
          title="PalpiteBox"
          url_link="https://vercel.com/diegohdcz/fullstack-master"
          descripion="Cupom de descontos para sugstões"
        />
        <Cardprojects
          title="Move.it"
          url_link="https://moveit-rocketseat-seven.vercel.app/"
          descripion="Cronômetro de exercícios laborais"
        />
        <Cardprojects
          title="event platform"
          url_link="https://lab2-event-platform.vercel.app/"
          descripion="Evento de cursos"
        />
        <Cardprojects
          title="dt-money"
          url_link="https://dtmoney-ignite-rouge.vercel.app/"
          descripion="Balanço financeiro"
        />
        <Cardprojects
          title="ibook"
          url_link="https://ibook-zeta.vercel.app/"
          descripion="Biblioteca e leitura de livros"
        />
        <Cardprojects
          title="atomic"
          url_link="https://atomic-design-brown.vercel.app/"
          descripion="Página estática para teste de atomic design"
        />
      </section>
    </>
  );
}
