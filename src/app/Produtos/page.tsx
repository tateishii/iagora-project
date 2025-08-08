"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Produtos() {

  const cards = [
    {
      imgSrc: "/landing.png",
      title: "Landing Pages Personalizados",
      description: "Criamos landing pages totalmente personalizadas para impulsionar as vendas e maximizar a conversão. Desenvolvemos páginas com design responsivo, foco na experiência do usuário e integração com sistemas de estoque, catálogo de produtos e painel administrativo. Ideal para empresas que desejam divulgar seus produtos ou serviços com eficiência, atrair leads qualificados e automatizar processos."
    },
    {
      imgSrc: "/erp.png",
      title: "Integração com ERP",
      description: "Desenvolvemos sistemas ERP completos, capazes de integrar todas as áreas da empresa, como financeiro, estoque, vendas e logística. Automatizamos processos para reduzir erros, aumentar a produtividade e garantir uma gestão mais estratégica e eficiente.Nossas soluções incluem integração com meios de pagamento, emissão de notas fiscais e logística automatizada, proporcionando mais controle e segurança para o seu negócio."
    },
    {
      imgSrc: "/pcp.png",
      title: "Soluções",
      description: "Criamos sistemas de Planejamento e Controle da Produção (PCP) sob medida, ideais para empresas que precisam otimizar a gestão da produção e alcançar maior eficiência operacional. Nossas soluções incluem módulos de BI com dashboards interativos, relatórios detalhados, gráficos e acompanhamento em tempo real dos principais indicadores (KPIs). Tudo isso para apoiar uma tomada de decisão rápida e baseada em dados concretos."
    }
  ];

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
              Conheça Nossos Produtos
            </motion.h1>
            <motion.p
              style={{ color: "#fff", fontSize: 24 }}
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
            >
              Imagine ter em suas mãos ferramentas que não apenas otimizam, mas
              catalisam o crescimento, que não só respondem às demandas, mas
              antecipam o sucesso.
            </motion.p>

          </div>
        </div>
      </section>

      <div className="cards-container">
        {cards.map(({ imgSrc, title, description }, idx) => (
          <div
            key={idx}
            className="card"
            style={{ backgroundImage: `url(${imgSrc})` }}
          >
            <div className="card-content">
              <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-overlay">
              <div className="overlay-content">
                <p>{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


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
          background-image:
            linear-gradient(to bottom, rgba(26, 26, 26, 0) 65%, #646464ff 100%),
            url("/fundo2.png");
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 100%;
          padding-top: 305px;
          padding-left: 80px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          position: relative;
          overflow: visible;
        }

        .overlay::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(14, 14, 14, 0.6);
          z-index: 0;
        }

        .overlay::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 140px; 
          z-index: 1;
          pointer-events: none;
        }

        .content {
          position: relative;
          z-index: 2; 
          max-width: 700px;
        }

        .top-section .content .title {
          font-size: 32px !important;
          font-weight: bold !important;
          color: #0074bb !important;
          margin-bottom: 20px !important;
        }

        .top-section .content .description {
          font-size: 24px !important;
          color: #ffffff !important;
        }

        .cards-container {
          display: flex;
          gap: 2rem;
          justify-content: center;
          padding: 4rem 2rem;
          background-color: white;
          position: relative;
          box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.04);
        }

        .card {
          position: relative;
          width: 300px;
          height: 360px;
          background: linear-gradient(to bottom, #f0f0f0, #ffffff);
          border-radius: 20px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem;
          text-align: center;
          transition: transform 0.3s ease;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }

        .cards-container::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 140px; 
          pointer-events: none;
          background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
          z-index: 2;
        }


        .card:hover {
          transform: translateY(-6px);
        }

        .card-content {
          z-index: 1;
        }

        .card-icon {
          width: 60px;
          height: 60px;
          margin-bottom: 1rem;
        }

        .card-title {
          font-size: 20px;
          font-weight: bold;
          color: #f3f3f3ff;
          transition: opacity 0.3s ease;
        }

        .card:hover .card-title {
          opacity: 0;
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
          font-size: 16px;
          line-height: 1.4;
          text-align: left;
        }
      `}</style>
    </main>
  );
}
