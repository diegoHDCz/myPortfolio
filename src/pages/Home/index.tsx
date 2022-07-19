import { Header } from "../../components/Header";
import { Skills } from "../../components/Skills";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import styles from "./styles.module.scss";

export function Home() {

  return (
    <>
      <Header />
      <div className={styles.homeContainer}>
        <p className={styles.homeContent}>
          Olá sou um desenvolvedor de sistemas em constante evolução, visite meu
          <strong> Github</strong> ou <strong> Linkedin</strong> para me conhecer
          melhor, ou caso prefira falar comigo, me envie uma mensagem no{" "}
          <strong>whatsApp.</strong>
        </p>
      </div>
      <div className={styles.iconsRow}>
        <a target="_blank" href="https://github.com/diegoHDCz">
          <SiGithub size={24} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/diego-czajka-6a82191b2/"
        >
          <SiLinkedin size={24} />
        </a>

        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=45984090113&text=Olá, vamos falar de desenvolvimento?"
        >
          <SiWhatsapp size={24} />
        </a>
      </div>
      <Skills />
    </>
  );
}
