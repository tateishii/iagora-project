"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Boxes } from "../components/ui/Boxes";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./servicos.module.css";

export default function Servicos() {
  const balloons = [
    {
      titulo: "Desenvolvimento Web",
      descricao: "Criação de sites, sistemas web e plataformas sob medida para o seu negócio.",
      style: { top: "30px", left: "6%" },
      extraPosition: { top: "130px", left: "2%" },
      from: "left",
      extraContent: {
        titulo: "Mais detalhes Desenvolvimento",
        descricao: "Texto diferente",
      }
    },
    {
      titulo: "Cloud Computing",
      descricao: "Migração, gerenciamento e otimização de ambientes em nuvem como AWS, Azure e Google Cloud.",
      style: { top: "30px", right: "-20%" },
      extraPosition: { top: "130px", right: "2%" },
      from: "right",
      extraContent: {
        titulo: "Mais coisas skkssk",
        descricao: "sjsososksoso",
      }
    },
    {
      titulo: "Consultoria em TI",
      descricao: "Análise estratégica e otimização de processos tecnológicos com foco em resultados.",
      style: { top: "250px", left: "30%" },
      extraPosition: { top: "60px", left: "45%" },
      from: "left",
    },
    {
      titulo: "Aplicativos Mobile",
      descricao: "Desenvolvimento de aplicativos iOS e Android com alta performance.",
      style: { top: "250px", right: "5%" },
      extraPosition: { top: "60px", right: "40%" },
      from: "right",
    },
    {
      titulo: "Suporte Técnico e Help Desk",
      descricao: "Atendimento remoto e presencial com agilidade, confiança e SLA personalizado.",
      style: { top: "450px", left: "53%" },
      extraPosition: { top: "570px", right: "20%"},
      from: "left",
    },
  ];

  const balloonsSectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeBalloon, setActiveBalloon] = useState<number | null>(null);

  useEffect(() => {
    const section = balloonsSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.topSection}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <motion.h1
              className={styles.title}
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
            >
              Conheça Nossos Serviços
            </motion.h1>
            <motion.p
              className={styles.description}
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
            >
              Sua visão se torna realidade com nossas soluções digitais personalizadas. Sites, apps e sistemas que geram resultados, com a inteligência e o suporte que seu negócio merece.
            </motion.p>
          </div>
        </div>
      </section>

      <section className={styles.balloonsSection} ref={balloonsSectionRef}>
        <div className={styles.balloonsWrapper}>
          <div className={styles.boxesContainer}>
            <Boxes />
            <div className={styles.balloonsContainer}>
              {balloons.map(({ titulo, descricao, style, from }, index) => (
                <motion.div
                  key={index}
                  className={`${styles.balloon} ${visible ? styles.visible : ""} ${styles["from-" + from]}`}
                  style={style}
                  onMouseEnter={() => setActiveBalloon(index)}
                  onMouseLeave={() => setActiveBalloon(null)}
                  initial={{ scale: 1 }}
                  animate={{ scale: activeBalloon === index ? 1.05 : 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={styles.balloonContent}>
                    <h3>{titulo}</h3>
                    <p>{descricao}</p>

                    <motion.div
                      className={styles.arrow}
                      initial={{ width: 0 }}
                      animate={{ width: activeBalloon === index ? 100 : 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </motion.div>
              ))}

              {activeBalloon !== null && (
                <motion.div
                  className={styles.extraBalloon}
                  style={balloons[activeBalloon].extraPosition}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.4 }}
                >

                  <h3>{balloons[activeBalloon].titulo}</h3>
                  <p>{balloons[activeBalloon].descricao}</p>
                </motion.div>
              )}

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
