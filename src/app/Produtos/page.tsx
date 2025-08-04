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
                            Imagine ter em suas mãos ferramentas que não apenas otimizam, mas catalisam o crescimento, que não só respondem às demandas, mas antecipam o sucesso.
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
                            <p>Criamos landing pages totalmente personalizadas para impulsionar as vendas e maximizar a conversão. Desenvolvemos páginas com design responsivo, foco na experiência do usuário e integração com sistemas de estoque, catálogo de produtos e painel administrativo. Ideal para empresas que desejam divulgar seus produtos ou serviços com eficiência, atrair leads qualificados e automatizar processos.</p>
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
                            <p>Desenvolvemos sistemas ERP completos, capazes de integrar todas as áreas da empresa, como financeiro, estoque, vendas e logística. Automatizamos processos para reduzir erros, aumentar a produtividade e garantir uma gestão mais estratégica e eficiente. Nossas soluções incluem integração com meios de pagamento, emissão de notas fiscais e logística automatizada, proporcionando mais controle e segurança para o seu negócio.</p>
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
                            <p>Criamos sistemas de Planejamento e Controle da Produção (PCP) sob medida, ideais para empresas que precisam otimizar a gestão da produção e alcançar maior eficiência operacional. Nossas soluções incluem módulos de BI com dashboards interativos, relatórios detalhados, gráficos e acompanhamento em tempo real dos principais indicadores (KPIs). Tudo isso para apoiar uma tomada de decisão rápida e baseada em dados concretos.</p>
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
          background-image: url("/fundo2.png");
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
          background-color: rgba(62, 52, 52, 0.6);
          z-index: 0;
        }

        .content {
          position: relative;
          z-index: 1;
        }


        .content {
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
          color: #FFFFFF;
        }

        .bottom-section {
          background-color: #d9d9d9;
          padding: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: slideUp 1.2s ease forwards;
        }

        @keyframes slideUp {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
        }

        .bottom-content {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 1200px;
          gap: 40px;
        }

        .left-side,
        .right-side {
          flex: 1;
        }

        .bottom-title {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #0074BB;
        }

        .bottom-text {
          font-size: 24px;
          color: #000000ff;
        }

        .topics {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .topics li {
          font-size: 22px;
          margin-bottom: 12px;
          position: relative;
          padding-left: 24px;
          color: #000000ff;
        }

        .topics li::before {
          content: "";
          width: 8px;
          height: 8px;
          background-color: #000000ff;
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 9px;
        }

        .cards-container {
            display: flex;
            gap: 2rem;
            justify-content: center;
            padding: 4rem 2rem;
            margin-top: 60px;
            background-color: #d9d9d9;
        }

        .card {
            position: relative;
            width: 300px;
            height: 360px;
            background-color: #f5f5f5;
            border-radius: 20px;
            box-shadow: 0 4px 12px rgba(4, 0, 0, 0.2);
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
            color: #0074bb
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
