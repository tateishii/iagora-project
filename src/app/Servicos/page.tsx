"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Servicos() {
  return (
    <main>
      <Header />

      <section className="top-section">
        <div className="overlay">
          <div className="content">
            <h1 className="title">Desenvolvimento Web</h1>
            <p className="description">
              Construímos soluções digitais sob medida que conectam ideias e geram resultados. Da estratégia à execução, nosso time desenvolve interfaces modernas, eficientes e funcionais para sua presença online.
            </p>
          </div>
        </div>
      </section>

      <section className="balloons-section">
        <div className="balloons-container">
          <div className="balloon" style={{ top: "-10px", left: "0%" }}>
            <div className="balloon-content">
              <h3>Desenvolvimento Web</h3>
              <p>Criação de sites, sistemas web e plataformas sob medida para o seu negócio.</p>
            </div>
          </div>
          <div className="balloon" style={{ top: "-10px", right: "0%" }}>
            <div className="balloon-content">
              <h3>Cloud Computing</h3>
              <p>Migração, gerenciamento e otimização de ambientes em nuvem como AWS, Azure e Google Cloud.</p>
            </div>
          </div>

          <div className="balloon" style={{ top: "180px", left: "19%" }}>
            <div className="balloon-content">
              <h3>Consultoria em TI</h3>
              <p>Análise estratégica e otimização de processos tecnológicos com foco em resultados.</p>
            </div>
          </div>
          <div className="balloon" style={{ top: "180px", right: "19%" }}>
            <div className="balloon-content">
              <h3>Aplicativos Mobile</h3>
              <p>Desenvolvimento de aplicativos iOS e Android com alta performance.</p>
            </div>
          </div>

          <div className="balloon" style={{ top: "280px", left: "40%" }}>
            <div className="balloon-content">
              <h3>Suporte Técnico e Help Desk</h3>
              <p>Atendimento remoto e presencial com agilidade, confiança e SLA personalizado.</p>
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
          background: none;
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
        }

        .overlay::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(22, 26, 50, 0.6);
          z-index: 0;
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
          color: #ffffffff;
        }

        .balloons-section {
          position: relative;
          background: linear-gradient(135deg, #1a084dff, #8b7979);
          padding-top: 60px;
          padding-bottom: 80px;
          overflow: visible; 
          min-height: 420px; 
        }

        .balloons-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          height: 400px;
          margin: 0 auto;
        }

        .balloon {
          position: absolute;
          width: 240px;
          min-height: 160px;
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 20px;
          transition: transform 0.3s;
          animation: float 4s ease-in-out infinite;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }

        .balloon:hover {
          transform: scale(1.05);
          z-index: 10;
        }

        .balloon-content {
          color: #000;
          font-size: 16px;
          line-height: 1.5;
          word-break: break-word;
          padding: 0;
          margin: 0 auto;
        }

        .balloon-content h3 {
          font-size: 22px;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .balloon-content p {
          font-size: 16px;
          margin: 0;
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
      `}</style>
    </main>
  );
}
