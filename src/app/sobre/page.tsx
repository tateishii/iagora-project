"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import styles from "./sobre.module.css";

export default function Sobre() {
  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.topSection}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <motion.h1
              className={styles.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              🧠 Quem Somos
            </motion.h1>
            <p className={styles.description}>
              IAgora Desenvolvimento é especializada na criação de soluções digitais que transformam negócios. Atuamos com excelência no desenvolvimento de sistemas web, automação de processos (RPA), CRMs e ERPs, sempre com foco em inovação, eficiência e resultados.
            </p>
          </div>

          <div className={styles.divider} />

          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <motion.h2
                className={styles.bottomTitle}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                📖 Nossa História
              </motion.h2>
              <p className={styles.bottomText}>
                Com profissionais de longa bagagem, a IAgora nasceu com a missão de transformar o cenário tecnológico através do desenvolvimento de sistemas inovadores e da automação inteligente. Contamos com uma equipe altamente qualificada, comprometida em simplificar processos e abrir novos caminhos para o futuro digital.              </p>
            </div>
            <div className={styles.card}>
              <motion.h2
                className={styles.bottomTitle}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                💡 Nossos Valores
              </motion.h2>
              <ul className={styles.topics}>
                <li>Inovação: buscamos constantemente novas tecnologias e metodologias para entregar soluções de ponta.</li>
                <li>Comprometimento: dedicamos nossos esforços para garantir qualidade e excelência em cada projeto.</li>
                <li>Transparência: mantemos relações éticas e claras com nossos clientes e parceiros.</li>
                <li>Colaboração: valorizamos o trabalho em equipe e a troca de conhecimentos para evoluir continuamente.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
