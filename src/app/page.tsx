"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection";
import Simple3DCard from "./components/Simple3DCard";
import styles from "./landingpage.module.css";

export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    { id: 1, href: "/Produtos", imgSrc: "/landingpage.png" },
    { id: 2, href: "/Produtos", imgSrc: "/erpsolu.png" },
    { id: 3, href: "/Produtos", imgSrc: "/pcpsolu.png" },
    { id: 4, href: "/Produtos", imgSrc: "/sla.png" },
  ];

  const cardWidth = 320;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const visibleCount = 2;
        const maxIndex = cards.length - visibleCount;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [cards.length, isPaused]);

  return (
    <>
      <section id="topo" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            IAgora Sua Parceira em Soluções{" "}
            <span className={styles.destaque}>Tecnológicas</span> Inovadoras.
          </h1>
          <p className={styles.heroSubtitle}>
            Criamos sistemas sob medida, e-commerces personalizados e integrações
            inteligentes com ERP. Acelere o crescimento do seu negócio com soluções
            tecnológicas eficientes, seguras e escaláveis. 🚀
          </p>
        </div>
      </section>

      <section className={styles.blocoColorido}>
        <div className={styles.parteBranca}>
          <div className={styles.carouselWrapper}>
            <div
              className={styles.cardsContainer}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                transform: `translateX(-${currentIndex * cardWidth}px)`,
              }}
            >
              {cards.map(({ id, href, imgSrc }, index) => (
                <Simple3DCard
                  key={id}
                  imageSrc={imgSrc}
                  alt={`Imagem ${id}`}
                  href={href}
                  className={index === currentIndex ? styles.activeCard : ""}
                />
              ))}
            </div>
          </div>

          <div className={styles.textoDireita}>
            <AnimatedSection delay={0.2}>
              <>
                <h2>Por que nós?</h2>
                <p>
                  Tecnologia sob medida. inovação real, parceria confiável.
                  Transformamos desafios em soluções com sistemas Web inteligentes,
                  automação RPA e plataformas CRM/ERP personalizadas. Você sonha, a
                  gente desenvolve com transparência e uma equipe pronta para
                  acelerar o seu crescimento.
                </p>
              </>
            </AnimatedSection>
          </div>
        </div>

        <div className={styles.parteRoxa}>
          <div className={styles.bgParallax}></div>
          <div className={styles.conteudoRoxo}>
            <div className={styles.tituloRoxo}>
              <AnimatedSection delay={0.2}>
                <h2>
                  Transformamos seu negócio
                  <br />
                  com inovação
                </h2>
              </AnimatedSection>
              <div className={styles.colaboradoresInline}>
                <span>Descubra quem está por trás do sucesso</span>
                <Link href="/colaboradores">
                  <button>Colaboradores</button>
                </Link>
              </div>
            </div>

            <div className={styles.textoRoxo}>
              <AnimatedSection delay={0.4}>
                <p
                  style={{
                    marginTop: "-10px",
                    position: "relative",
                    left: "20px",
                  }}
                >
                  Somos especialistas em moldar seu futuro digital, desenvolvendo
                  soluções ágeis, otimizando suas operações e elevando sua gestão com
                  o poder da nuvem e da inteligência artificial. Seu crescimento,
                  nossa tecnologia.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
