"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Desenvolvimento() {
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

            <section className="bottom-section">
                <div className="bottom-content">
                    <div className="left-side">
                        <h2 className="bottom-title">Desenvolvimento Web de Impacto: Sua Estratégia Digital no Centro</h2>
                        <p className="bottom-text">
                            No cenário atual, a tecnologia e os objetivos de negócio precisam andar lado a lado para qualquer iniciativa digital ser bem-sucedida. À medida que o mundo se digitaliza, as empresas colocam seus serviços digitais no cerne de suas estratégias. Líderes e executivos estão traçando planos ambiciosos para suas plataformas digitais agora mais cruciais do que nunca mas se deparam com orçamentos apertados, um mercado cada vez mais concorrido, novas demandas de uso, e a urgência por recursos especializados.
Muitas equipes de produção e desenvolvimento já tentaram de tudo: aumentar equipes, otimizar processos, priorizar de forma diferente, contratar agências ou terceirizar. Mesmo assim, a pergunta persiste: "Existe uma forma mais eficaz?"
Com nossa vasta experiência em desenvolvimento web, entendemos a importância de uma abordagem focada no produto para criar aplicações e promover melhorias contínuas. Através de nossos aceleradores de soluções, metodologias ágeis, plataformas de automação e expertise em tecnologias low-code/no-code, conseguimos reduzir o tempo de lançamento no mercado, otimizar os custos de desenvolvimento e elevar a qualidade do seu código.
                        </p>
                    </div>
                    <div className="right-side">
                        <h2 className="bottom-title">Nossos diferenciais</h2>
                        <ul className="topics">
                            <li>Alinhamento Estratégico: Entendemos que a colaboração entre TI e negócios é fundamental, e alinhamos nossos esforços para gerar valor contínuo para sua empresa.</li>
                            <li>Colaboração Eficaz: Nossos modelos de atuação permitem uma colaboração em tempo real, acelerando seus cronogramas de desenvolvimento.</li>
                            <li>Flexibilidade Total: Oferecemos modelos de engajamento flexíveis, seja para dar suporte às suas equipes internas ou para executar programas inteiros de forma autônoma.</li>
                            <li>Qualidade Acelerada: Com nossa metodologia de automação de testes, aceleramos a validação de qualidade, garantindo a robustez das suas aplicações.</li>
                            <li>Abordagem Moderna: Diferenciamos a engenharia de software tradicional, focada em projetos, de uma abordagem ágil e centrada no produto digital, que é a chave para o sucesso hoje.</li>
                            <li>Otimização com Low-Code/No-Code: Nossa experiência e aceleradores em sistemas low-code nos permitem otimizar ainda mais o desenvolvimento dos seus softwares, agilizando a criação de funcionalidades.</li>
                        </ul>
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
          background-color: rgba(255, 255, 255, 0.6);
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
          color: #000;
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
      `}</style>
        </main>
    );
}
