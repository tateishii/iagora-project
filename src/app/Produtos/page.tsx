"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Produtos() {
  return (
    <main>
      <Header />

      <section className="top-section">
        <div className="overlay">
          <div className="content">
            <h1 className="title">Conheça Nossos Produtos</h1>
            <p className="description">
              Imagine ter em suas mãos ferramentas que não apenas otimizam, mas
              catalisam o crescimento, que não só respondem às demandas, mas
              antecipam o sucesso.
            </p>
          </div>
        </div>
      </section>

      <div className="cards-container">
        <div className="card">
          <div className="card-content">
            <img src="/icon1.png" alt="Icone 1" className="card-icon" />
            <h3 className="card-title">Landing Pages Personalizados</h3>
          </div>
          <div className="card-overlay">
            <div className="overlay-content">
              <p>
                Criamos landing pages totalmente personalizadas para impulsionar
                as vendas e maximizar a conversão. Desenvolvemos páginas com
                design responsivo, foco na experiência do usuário e integração
                com sistemas de estoque, catálogo de produtos e painel
                administrativo. Ideal para empresas que desejam divulgar seus
                produtos ou serviços com eficiência, atrair leads qualificados e
                automatizar processos.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <img src="/icon2.png" alt="Icone 2" className="card-icon" />
            <h3 className="card-title">Sistemas ERP</h3>
          </div>
          <div className="card-overlay">
            <div className="overlay-content">
              <p>
                Desenvolvemos sistemas ERP completos, capazes de integrar todas
                as áreas da empresa, como financeiro, estoque, vendas e
                logística. Automatizamos processos para reduzir erros, aumentar a
                produtividade e garantir uma gestão mais estratégica e eficiente.
                Nossas soluções incluem integração com meios de pagamento, emissão
                de notas fiscais e logística automatizada, proporcionando mais
                controle e segurança para o seu negócio.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <img src="/icon3.png" alt="Icone 3" className="card-icon" />
            <h3 className="card-title">Sistema PCP</h3>
          </div>
          <div className="card-overlay">
            <div className="overlay-content">
              <p>
                Criamos sistemas de Planejamento e Controle da Produção (PCP) sob
                medida, ideais para empresas que precisam otimizar a gestão da
                produção e alcançar maior eficiência operacional. Nossas soluções
                incluem módulos de BI com dashboards interativos, relatórios
                detalhados, gráficos e acompanhamento em tempo real dos
                principais indicadores (KPIs). Tudo isso para apoiar uma tomada de
                decisão rápida e baseada em dados concretos.
              </p>
            </div>
          </div>
        </div>
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
          padding: 0 80px;
          display: flex;
          align-items: center;
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

          background-image:
            linear-gradient(45deg, rgba(124, 122, 122, 0.18) 25%, rgba(124, 122, 122, 0) 25%),
            linear-gradient(-45deg, rgba(70, 69, 69, 0.14) 25%, rgba(70, 69, 69, 0) 25%),
            linear-gradient(45deg, rgba(75, 73, 73, 0) 75%, rgba(75, 73, 73, 0.12) 75%),
            linear-gradient(-45deg, rgba(133, 131, 131, 0) 75%, rgba(133, 131, 131, 0.10) 75%);
          background-size: 40px 40px;
          background-position: 0 0, 0 20px, 20px -20px, -20px 0px;
          filter: blur(3px) saturate(0.95);
          opacity: 0.95;
        }

        .content {
          position: relative;
          z-index: 2; 
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
          color: #ffffff;
        }

        .cards-container {
          display: flex;
          gap: 2rem;
          justify-content: center;
          padding: 4rem 2rem;
          background-color: #646464ff; /* mantido */
          background-image:
            linear-gradient(45deg, #7c7a7aff 25%, transparent 25%),
            linear-gradient(-45deg, #464545ff 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #4b4949ff 75%),
            linear-gradient(-45deg, transparent 75%, #858383ff 75%);
          background-size: 40px 40px;
          background-position: 0 0, 0 20px, 20px -20px, -20px 0px;
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
          color: #0074bb;
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
