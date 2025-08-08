"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection";
import Simple3DCard from "./components/Simple3DCard";

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
      <section id="topo" className="hero">
        <div className="hero-content">
          <h1>
            IAgora Sua Parceira em Soluções{" "}
            <span className="destaque">Tecnológicas</span> Inovadoras.
          </h1>
          <p>
            Criamos sistemas sob medida, e-commerces personalizados e integrações
            inteligentes com ERP. Acelere o crescimento do seu negócio com soluções
            tecnológicas eficientes, seguras e escaláveis. 🚀
          </p>
        </div>
      </section>

      <section className="bloco-colorido">
        <div className="parte-branca">
          <div className="carousel-wrapper">
            <div
              className="cards-container"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                transform: `translateX(-${currentIndex * cardWidth}px)`,
              }}
            >
              {cards.map(({ id, href, imgSrc }) => (
                <Simple3DCard
                  key={id}
                  imageSrc={imgSrc}
                  alt={`Imagem ${id}`}
                  href={href}
                />
              ))}
            </div>
          </div>

          {/* Mantemos a div texto-direita fixa e animamos somente o conteúdo interno */}
          <div className="texto-direita">
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

        <div className="parte-roxa">
          <div className="conteudo-roxo">
            <div className="titulo-roxo">
              <AnimatedSection delay={0.2}>
                <h2>
                  Transformamos seu negócio
                  <br />
                  com inovação
                </h2>
              </AnimatedSection>
              <div className="colaboradores-inline">
                <span>Descubra quem está por trás do sucesso</span>
                <Link href="/colaboradores">
                  <button>Colaboradores</button>
                </Link>
              </div>
            </div>

            <div className="texto-roxo">
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

      <style jsx>{`
        .hero {
          background-image: url("/fundo.png");
          background-size: cover;
          background-position: center;
          justify-content: flex-end;
          padding-right: 5rem;
          color: white;
          height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero-content {
          max-width: 700px;
          text-align: left;
        }

        h1 {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        p {
          font-size: 22px;
          line-height: 1.4;
        }

        .destaque {
          color: #00c2ff;
        }

        .bloco-colorido {
          height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .parte-branca {
          flex: 6;
          background-color: #ffffff;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 5rem;
          padding-right: 5rem;
          gap: 4rem;
        }

        .carousel-wrapper {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .cards-container {
          display: flex;
          gap: 20px;
          transition: transform 0.5s ease-in-out;
        }

        .texto-direita {
          max-width: 35%;
        }

        .texto-direita h2 {
          color: #0074bb;
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .texto-direita p {
          font-size: 21px;
          font-weight: bold;
          line-height: 1.6rem;
          color: #171717;
        }

        .parte-roxa {
          flex: 4;
          background-color: #372f53;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 3rem 5rem;
          position: relative;
        }

        .conteudo-roxo {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .titulo-roxo h2 {
          color: #0074bb;
          font-size: 36px;
          font-weight: bold;
          margin: 1rem 0 0 0;
          padding-right: 2rem;
        }

        .texto-roxo {
          max-width: 600px;
          font-size: 24px;
          color: #ffffff;
          line-height: 1.6;
          text-align: left;
          padding-top: 6rem;
          margin-left: auto;
        }

        .colaboradores-inline {
          margin-top: 5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .colaboradores-inline span {
          font-size: 22px;
          color: white;
          font-weight: bold;
        }

        .colaboradores-inline button {
          background-color: #ff00ff;
          color: white;
          font-size: 18px;
          font-weight: bold;
          padding: 0.5rem 1.2rem;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .colaboradores-inline button:hover {
          background-color: #cc00cc;
        }
      `}</style>
    </>
  );
}
