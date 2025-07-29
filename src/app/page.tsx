"use client";

import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      <section id="topo" className="hero">
        <div className="hero-content">
          <h1>
            IAgora Sua Parceira em Soluções{" "}
            <span className="destaque">Tecnológicas</span> Inovadoras.
          </h1>
          <p>
            Criamos sistemas sob medida, e-commerces
            personalizados e integrações inteligentes com ERP.
            Acelere o crescimento do seu negócio com soluções
            tecnológicas eficientes, seguras e escaláveis. 🚀
          </p>
        </div>
      </section>

      {/* Page ao descer*/}
      <section className="bloco-colorido">
        <div className="parte-branca">
          <div className="cards-container">
            <div className="card"></div>
            <div className="card"></div>
          </div>


          <div className="texto-direita">
            <h2>Por que nós?</h2>
            <p>
              Tecnologia sob medida. inovação real, parceria confiável.
              Transformamos desafios em soluções com sistemas Web
              inteligentes, automação RPA e plataformas CRM/ERP
              personalizadas. Você sonha, a gente desenvolve com
              transparência e uma equipe pronta para acelerar o seu
              crescimento
            </p>
          </div>
        </div>
        <div className="parte-roxa">
          <div className="conteudo-roxo">
            <div className="titulo-roxo">
              <h2>Transformamos seu negócio<br />
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

      <footer className="footer-final">
        <div className="footer-left">
          <h3>IAgora Tecnologia</h3>
          <p>© 2025 Todos os direitos reservados.</p>
        </div>
        <div className="footer-right">
          <a href="https://www.instagram.com/iagora.tec?igsh=MTZmYm5nbHJqcHNucw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="/instagram-icon.svg" alt="Instagram"/>
          </a>
          <a href="/https://wa.me/11956538444" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <img src="/whatsapp-icon.svg" alt="WhatsApp"/>
          </a>
        </div>
      </footer>

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

        .texto-direita {
          max-width: 500px;
        }    

        .texto-direita h2 {
          color: #0074bb;
          font-size: 36px;
          font-weight: bold;
          margin-bottom: h2;
        }

        .texto-direita p {
          font-size: 21;
          font-weight: bold;
          line-height: 1.6rem;
          color: #171717;
        }

        .cards-container {
          display: flex;
          gap: 2rem;
        }

        .card {
          width: 286px;
          height: 286px;
          background-color: #f5f5f5;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(4, 0, 0, 1);
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

        .footer-final {
          background: rgba(17, 7, 17, 0.9);
          backdrop-filter: blur(4px);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 3rem;
          font-family: 'Arial', sans-serif;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-left h3 {
          margin: 0 0 0.3rem 0;
          font-weight: bold;
          font-size: 20px;
        }

        .footer-left p {
          margin: 0;
          font-size: 14px;
          opacity: 0.7;
        }

        .footer-right a {
          margin-left: 1rem;
          display: inline-block;
          transition: opacity 0.3s ease;
        }

        .footer-right a:hover {
          opacity: 0.7;
        }

        .footer-right img {
          width: 45px;
          height: 45px;
          object-fit: contain;
          cursor: pointer;
        }

        .footer-right img.whatsapp{
          width: 40px;
          height: 40px;
          object-fit: contain;
          margin-top: 4px;
        }


      `}</style>
    </>
  );
}
