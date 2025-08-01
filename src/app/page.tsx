"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';

export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="topo" className="hero">
        <div className="hero-content">
          <h1>
            Agora Sua Parceira em Soluções{" "}
            <span className="destaque">Tecnológicas</span> Inovadoras.
          </h1>
          <p>
            Criamos sistemas sob medida, e-commerces personalizados e integrações inteligentes com ERP.
            Acelere o crescimento do seu negócio com soluções tecnológicas eficientes, seguras e escaláveis. 🚀
          </p>
        </div>
      </section>

      <section className="bloco-colorido">
        <div className="parte-branca">
          <div className="cards-wrapper">
            <div
              className="cards-container"
              style={{ transform: `translateX(-${currentIndex * (286 + 32)}px)` }}
            >
              {[1, 2, 3, 4].map((num) => (
                <div className="card" key={num}>
                  <div className="card-content">Card {num}</div>
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <h3>Título {num}</h3>
                      <p>Texto do overlay</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="texto-direita">
            <h2>Por que nós?</h2>
            <p>
              Tecnologia sob medida. inovação real, parceria confiável.
              Transformamos desafios em soluções com sistemas Web
              inteligentes, automação RPA e plataformas CRM/ERP personalizadas.
              Você sonha, a gente desenvolve com transparência e uma equipe pronta para acelerar o seu crescimento.
            </p>
          </div>
        </div>

        <div className="parte-roxa">
          <div className="conteudo-roxo">
            <div className="titulo-roxo">
              <h2>
                Transformamos seu negócio<br />
                com inovação
              </h2>
              <div className="colaboradores-inline">
                <span>Descubra quem está por trás do sucesso</span>
                <Link href="/colaboradores">
                  <button>Colaboradores</button>
                </Link>
              </div>
            </div>

            <div className="texto-roxo">
              <p>
                Somos especialistas em moldar seu futuro digital, desenvolvendo
                soluções ágeis, otimizando suas operações e elevando sua gestão
                com o poder da nuvem e da inteligência artificial.
                Seu crescimento, nossa tecnologia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .hero {
          background-image: url('/fundo.png');
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

        .cards-wrapper {
          overflow: hidden;
          width: 100%;
        }

        .cards-container {
          display: flex;
          gap: 2rem;
          transition: transform 0.6s ease-in-out;
          width: max-content;
        }

        .card {
          position: relative;
          width: 286px;
          height: 286px;
          background-color: #f5f5f5;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(4, 0, 0, 1);
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          cursor: pointer;
        }

        .card-content {
          z-index: 1;
          font-weight: bold;
          font-size: 24px;
        }

        .card-overlay {
          position: absolute;
          bottom: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(55, 47, 83, 0.95);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: bottom 0.4s ease-in-out;
          padding: 1rem;
        }

        .card:hover .card-overlay {
          bottom: 0;
        }

        .overlay-content {
          text-align: center;
        }

        .overlay-content h3 {
          font-size: 20px;
          margin-bottom: 0.5rem;
        }

        .overlay-content p {
          font-size: 16px;
        }

        .texto-direita {
          max-width: 40%;
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
          background-color: #372F53;
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
          color: #FFFFFF;
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
          background-color: #FF00FF;
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
