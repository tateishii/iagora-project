"use client";

import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import styles from "./colaboradores.module.css";

export default function Colaboradores() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    { imgSrc: "/dsafari.png", alt: "Distribuidora Safari" },
    { imgSrc: "/gr5.png", alt: "GR5 Logística" },
    { imgSrc: "/negreira.png", alt: "Negreira" },
    { imgSrc: "/ste.png", alt: "STE Fios" },
    { imgSrc: "/velpack.png", alt: "Velpack" },
  ];

  const cardWidth = 270 + 30;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const visibleCount = 4;
        const maxIndex = cards.length - visibleCount;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [cards.length, isPaused]);

  return (
    <>
      <main className={styles.main}>
        <section className={styles.topSection}>
          <h1 className={styles.title}>
            Nossa força é a união: <br />
            juntos, construímos resultados que transformam
          </h1>

          <div className={styles.cardsContainerWrapper}>
            <div
              className={styles.cardsContainer}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                transform: `translateX(-${currentIndex * cardWidth}px)`,
              }}
            >
              {cards.map((card, idx) => (
                <div key={idx} className={styles.card}>
                  <img
                    src={card.imgSrc}
                    alt={card.alt}
                    className={
                      card.imgSrc === "/ste.png" || card.imgSrc === "/velpack.png"
                        ? styles.imgAjustada
                        : ""
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.bottomSection}>
          <div className={styles.contentWrapper}>
            <div className={styles.leftSide}>
              <h2 className={styles.sideTitle}>Nossos Colaboradores</h2>
              <p className={styles.sideText}>
                No cerne da excelência em transporte e soluções logísticas, a
                união estratégica de Negreira, Distribuidora Safari, Velpack,
                STE Fios e GR5 Logística nos posiciona como seu parceiro ideal.
                Juntos, otimizamos cadeias de suprimentos com expertise
                diversificada e agilidade incomparável, garantindo que sua
                demanda seja atendida com a máxima eficiência e profissionalismo.
              </p>
            </div>

            <div className={styles.verticalLine} />

            <div className={styles.rightSide}>
              <h2 className={styles.sideTitle}>Que tal se juntar a nós?</h2>
              <p className={styles.sideText}>
                Na IAgora, convidamos você a elevar seu padrão digital. Com um
                portfólio que já ultrapassa 10 milhões em aplicações,
                desenvolvemos sites e plataformas estrategicamente estruturadas
                para otimizar, agilizar e impulsionar o seu progresso com
                excelência.
              </p>
            </div>
          </div>

          <div className={styles.logoInferior}>
            <img src="/logo.png" alt="Logo da empresa" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
