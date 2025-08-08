"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Boxes } from "../components/ui/Boxes";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Servicos() {
  const balloons = [
    {
      titulo: "Desenvolvimento Web",
      descricao: "Criação de sites, sistemas web e plataformas sob medida para o seu negócio.",
      style: { top: "30px", left: "6%" },
      from: "left",
    },
    {
      titulo: "Cloud Computing",
      descricao: "Migração, gerenciamento e otimização de ambientes em nuvem como AWS, Azure e Google Cloud.",
      style: { top: "30px", right: "-20%" },
      from: "right",
    },
    {
      titulo: "Consultoria em TI",
      descricao: "Análise estratégica e otimização de processos tecnológicos com foco em resultados.",
      style: { top: "250px", left: "30%" },
      from: "left",
    },
    {
      titulo: "Aplicativos Mobile",
      descricao: "Desenvolvimento de aplicativos iOS e Android com alta performance.",
      style: { top: "250px", right: "5%" },
      from: "right",
    },
    {
      titulo: "Suporte Técnico e Help Desk",
      descricao: "Atendimento remoto e presencial com agilidade, confiança e SLA personalizado.",
      style: { top: "450px", left: "53%" },
      from: "left",
    },
  ];

  const balloonsSectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
    <main>
      <Header />

      <section className="top-section">
        <div className="overlay">
          <div className="content">
            <motion.h1
              style={{ color: "#0074bb", fontSize: 32, fontWeight: "bold", marginBottom: 20 }}
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
            >
              Conheça Nossos Serviços
            </motion.h1>
            <motion.p
              style={{ color: "#fff", fontSize: 24 }}
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
            >
              	Sua visão se torna realidade com nossas soluções digitais personalizadas. Sites, apps e sistemas que geram resultados, com a inteligência e o suporte que seu negócio merece.
            </motion.p>

          </div>
        </div>
      </section>

      <section className="balloons-section" ref={balloonsSectionRef}>
        <div className="balloons-wrapper">
          <div className="boxes-container">
            <Boxes />
            <div className="balloons-container">
              {balloons.map(({ titulo, descricao, style, from }, index) => (
                <div
                  key={index}
                  className={`balloon ${visible ? "visible" : ""} from-${from}`}
                  style={style}
                >
                  <div className="balloon-content">
                    <h3>{titulo}</h3>
                    <p>{descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        main {
          scroll-behavior: smooth;
        }

        .top-section {
          position: relative;
          height: 100vh;
        }

        .overlay {
          background-image: url("/devweb.png");
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 100%;
          padding: 0 80px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          z-index: 1;
        }

        .overlay::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(22, 26, 50, 0.6);
          z-index: 0;
        }

        .overlay::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 250px;
          background: linear-gradient(to bottom, rgba(22, 26, 50, 0) 0%, rgba(22, 26, 50, 0.3) 50%, rgba(0, 0, 0, 0.7) 80%, rgba(0, 0, 0, 1) 100%);
          pointer-events: none;
          z-index: 2;
        }

        .content {
          position: relative;
          z-index: 1;
          max-width: 700px;
        }

        .title {
          font-size: 32px;
          font-weight: bold;
          color: #0074bb;
          margin-bottom: 20px;
        }

        .description {
          font-size: 24px;
          color: #fff;
        }

        .balloons-section {
          background: linear-gradient(135deg, #1a084dff, #8b7979);
          position: relative;
          overflow: hidden;
          height: 700px;
        }

        .balloons-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .boxes-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .boxes-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          transform: translate(-40%, -60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0);
        }


        .balloons-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          max-width: 1200px;
          height: 100%;
          margin: 0 auto;
          z-index: 1;
        }

        .balloon {
          position: absolute;
          width: 240px;
          min-height: 160px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 20px;
          transition: transform 0.3s;
          animation: float 4s ease-in-out infinite;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          animation: borderColorShift 8s linear infinite, float 4s ease-in-out infinite;
          color: #fff;

          opacity: 0;
          transform: translateX(0);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .balloon.from-left {
          transform: translateX(-50px);
        }
        .balloon.from-right {
          transform: translateX(50px);
        }

        .balloon.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .balloon:hover {
          transform: scale(1.05);
          z-index: 10;
        }

        .balloon-content {
          font-size: 16px;
          line-height: 1.5;
        }

        .balloon-content h3 {
          font-size: 22px;
          margin-bottom: 10px;
          font-weight: 700;
          color: #fff;
        }

        .balloon-content p {
          font-size: 16px;
          margin: 0;
          color: #fff;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes borderColorShift {
          0% {
            border-color: rgba(255, 255, 255, 0.3);
          }
          25% {
            border-color: rgba(255, 100, 100, 0.5);
          }
          50% {
            border-color: rgba(100, 255, 100, 0.5);
          }
          75% {
            border-color: rgba(100, 100, 255, 0.5);
          }
          100% {
            border-color: rgba(255, 255, 255, 0.3);
          }
        }
      `}</style>
    </main>
  );
}
