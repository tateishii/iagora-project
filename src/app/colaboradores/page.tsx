"use client";

import { useState, useEffect } from "react";
import Footer from "../components/Footer";

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
      <main>
        <section className="top-section">
          <h1 className="title">
            Nossa força é a união: <br />
            juntos, construímos resultados que transformam
          </h1>

          <div className="cards-container-wrapper">
            <div
              className="cards-container"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                transform: `translateX(-${currentIndex * cardWidth}px)`,
              }}
            >
              {cards.map((card, idx) => (
                <div key={idx} className="card">
                  <img
                    src={card.imgSrc}
                    alt={card.alt}
                    className={
                      card.imgSrc === "/ste.png" || card.imgSrc === "/velpack.png"
                        ? "img-ajustada"
                        : ""
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bottom-section">
          <div className="content-wrapper">
            <div className="left-side">
              <h2 className="side-title">Nossos Colaboradores</h2>
              <p className="side-text">
                No cerne da excelência em transporte e soluções logísticas, a
                união estratégica de Negreira, Distribuidora Safari, Velpack,
                STE Fios e GR5 Logística nos posiciona como seu parceiro ideal.
                Juntos, otimizamos cadeias de suprimentos com expertise
                diversificada e agilidade incomparável, garantindo que sua
                demanda seja atendida com a máxima eficiência e profissionalismo.
              </p>
            </div>

            <div className="vertical-line" />

            <div className="right-side">
              <h2 className="side-title">Que tal se juntar a nós?</h2>
              <p className="side-text">
                Na IAgora, convidamos você a elevar seu padrão digital. Com um
                portfólio que já ultrapassa 10 milhões em aplicações,
                desenvolvemos sites e plataformas estrategicamente estruturadas
                para otimizar, agilizar e impulsionar o seu progresso com
                excelência.
              </p>
            </div>
          </div>

          <div className="logo-inferior">
            <img src="/logo.png" alt="Logo da empresa" />
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        main {
          width: 100%;
          min-height: 100vh;
        }

        .top-section {
          background-color: #f8f8f8;
          padding: 80px 60px;
          text-align: center;
        }

        .title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 60px;
          color: #110711;
        }

        .cards-container-wrapper {
          overflow: hidden;
          width: calc(270px * 4 + 30px * 3);
          margin: 0 auto;
        }

        .cards-container {
          display: flex;
          gap: 30px;
          transition: transform 0.6s ease-in-out;
          width: max-content;
        }

        .card {
          background-color: #efebebff;
          width: 270px;
          height: 270px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 18px;
          flex-shrink: 0;
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }

        /* Ajuste para ste.png e velpack.png */
        .card img.img-ajustada {
          width: auto;
          max-width: 80%;
          height: auto;
          max-height: 80%;
          object-fit: contain;
        }

        .bottom-section {
          background-color: #292c31;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .content-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          width: 80%;
          max-width: 1000px;
          height: 100%;
          color: white;
          position: relative;
        }

        .left-side,
        .right-side {
          width: 45%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          text-align: center;
          box-sizing: border-box;
        }

        .side-title {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #0074bb;
        }

        .side-text {
          font-size: 18px;
          line-height: 1.5;
          color: #ffffff;
          justify-content: left;
          text-align: left;
        }

        .vertical-line {
          width: 2px;
          background-color: white;
          height: 90%;
          margin: 0 40px;
          align-self: center;
        }

        .logo-inferior {
          position: absolute;
          bottom: -50px;
          right: 40px;
        }

        .logo-inferior img {
          width: 160px;
          height: auto;
        }
      `}</style>
    </>
  );
}
