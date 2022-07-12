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
          github ou linkedin para me conhecer melhor, ou caso gostaria de falar
          comigo me envie uma mensagem no whatsApp.
        </p>
        <SiGithub>
          {" "}
          <a href=""></a>
        </SiGithub>
        <SiLinkedin>
          {" "}
          <a href=""></a>
        </SiLinkedin>
        <SiWhatsapp>
        <a href="https://api.whatsapp.com/send?phone=SeuNúmero&text=SuaMensagem"></a>
        </SiWhatsapp>
      </div>
      <Skills />
    </>
  );
}
