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
      descricao:
        "Criação de sites, sistemas web e plataformas sob medida para o seu negócio.",
      style: { top: "120px", left: "6%" },
      from: "left",
      extraContent: {
        titulo: "Desenvolvimento Web Avançado",
        descricao:
          "Sites modernos, responsivos e otimizados para performance e SEO.",
      },
    },
    {
      titulo: "Cloud Computing",
      descricao:
        "Migração, gerenciamento e otimização de ambientes em nuvem como AWS, Azure e Google Cloud.",
      style: { top: "120px", right: "-20%" },
      from: "right",
      extraContent: {
        titulo: "Cloud Computing Profissional",
        descricao:
          "Gerenciamento completo de nuvem, segurança, backup e escalabilidade.",
      },
    },
    {
      titulo: "Consultoria em TI",
      descricao:
        "Análise estratégica e otimização de processos tecnológicos com foco em resultados.",
      style: { top: "250px", left: "30%" },
      from: "left",
      extraContent: {
        titulo: "Consultoria Estratégica",
        descricao:
          "Orientação e soluções personalizadas para melhorar eficiência e resultados.",
      },
    },
    {
      titulo: "Aplicativos Mobile",
      descricao:
        "Desenvolvimento de aplicativos iOS e Android com alta performance.",
      style: { top: "250px", right: "5%" },
      from: "right",
      extraContent: {
        titulo: "Apps Mobile Profissionais",
        descricao:
          "Aplicativos intuitivos e rápidos, focados na melhor experiência do usuário.",
      },
    },
    {
      titulo: "Suporte Técnico e Help Desk",
      descricao:
        "Atendimento remoto e presencial com agilidade, confiança e SLA personalizado.",
      style: { top: "450px", left: "53%" },
      from: "left",
      extraContent: {
        titulo: "Suporte Premium",
        descricao:
          "Assistência técnica ágil, confiável e focada na continuidade do seu negócio.",
      },
    },
  ];

  const balloonsSectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeBalloon, setActiveBalloon] = useState<number | null>(null);
  const [extraPos, setExtraPos] = useState<{ top: number; left: number } | null>(
    null
  );

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

  const handleMouseEnter = (index: number, e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setActiveBalloon(index);

    if (!e) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const parentRect =
      balloonsSectionRef.current?.getBoundingClientRect() || { top: 0, left: 0 };

    let left = rect.left - parentRect.left + rect.width / 2;

    // Ajuste para balões próximos da borda direita
    if (rect.right > window.innerWidth - 150) {
      left = rect.left - parentRect.left + rect.width / 2 - 130;
    }

    setExtraPos({
      top: rect.top - parentRect.top - 80,
      left,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const related = e.relatedTarget as HTMLElement | null;
    if (related && related.classList.contains(styles.extraBalloon)) return;
    setActiveBalloon(null);
    setExtraPos(null);
  };

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
              Sua visão se torna realidade com nossas soluções digitais
              personalizadas. Sites, apps e sistemas que geram resultados, com a
              inteligência e o suporte que seu negócio merece.
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
                  onMouseEnter={(e) => handleMouseEnter(index, e)}
                  onMouseLeave={handleMouseLeave}
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

              <AnimatePresence>
                {activeBalloon !== null && extraPos && (
                  <motion.div
                    className={styles.extraBalloon}
                    style={{
                      top: extraPos.top,
                      left: extraPos.left,
                      transform: "translateX(-50%)",
                      position: "absolute",
                    }}
                    onMouseEnter={() => setActiveBalloon(activeBalloon)}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3>{balloons[activeBalloon].extraContent?.titulo || balloons[activeBalloon].titulo}</h3>
                    <p>{balloons[activeBalloon].extraContent?.descricao || balloons[activeBalloon].descricao}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
