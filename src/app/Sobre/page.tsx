"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Sobre() {
    return (
        <main>
            <Header />

            <section className="top-section">
                <div className="overlay">
                    <div className="content">
                        <h1 className="title">🧠 Quem Somos</h1>
                        <p className="description">
                            IAgora Desenvolvimento é especializada na criação de soluções digitais que transformam negócios. Atuamos com excelência no desenvolvimento de sistemas web, automação de processos (RPA), CRMs e ERPs, sempre com foco em inovação, eficiência e resultados.
                        </p>
                    </div>

                    <div className="divider" />

                    <div className="cards-container">
                        <div className="card">
                            <h2 className="bottom-title">📖 Nossa História</h2>
                            <p className="bottom-text">Fundada em 2024, a IAgora nasceu com a missão de transformar o cenário tecnológico através do desenvolvimento de sistemas inovadores e da automação inteligente. Contamos com uma equipe altamente qualificada, comprometida em simplificar processos e abrir novos caminhos para o futuro digital.</p>
                        </div>
                        <div className="card">
                            <h2 className="bottom-title">💡 Nossos Valores</h2>
                            <ul className="topics">
                                <li>Inovação: buscamos constantemente novas tecnologias e metodologias para entregar soluções de ponta.</li>
                                <li>Comprometimento: dedicamos nossos esforços para garantir qualidade e excelência em cada projeto.</li>
                                <li>Transparência: mantemos relações éticas e claras com nossos clientes e parceiros.</li>
                                <li>Colaboração: valorizamos o trabalho em equipe e a troca de conhecimentos para evoluir continuamente.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
    main {
    scroll-behavior: smooth;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .top-section {
    position: relative;
    min-height: 100vh;
    background-image: url("/iagora.png");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    padding: 100px 80px 40px 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: auto;
  }

    .content {
        max-width: 700px;
        margin-bottom: 40px;
    }

  .title {
    font-size: 38px;
    font-weight: bold;
    color: #2eafff;
    margin-bottom: 20px;
  }

  .description {
    font-size: 22px;
    color: #ffffff;
  }

  .divider {
    width: 100%;
    height: 4px;
    background-color: #2eafff;
    margin: 40px 0;
  }

  .cards-container {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
  }

  .card {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 30px;
    border-radius: 12px;
    flex: 1;
    min-width: 280px;
  }

  .bottom-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #ffffffff;
  }

  .bottom-text {
    font-size: 20px;
    color: #ffffffff;
  }

  .topics {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .topics li {
    font-size: 20px;
    margin-bottom: 12px;
    position: relative;
    padding-left: 24px;
    color: #ffffffff;
  }

  .topics li::before {
    content: "";
    width: 8px;
    height: 8px;
    background-color: #ffffffff;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 9px;
  }

  .footer {
    margin-top: auto;
  }
`}</style>

        </main>
    );
}