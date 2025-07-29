"use client";

import Footer from "../components/Footer";

export default function Colaboradores() {
  return (
    <>
      <main>
        <section className="top-section">
          <h1 className="title">
            Nossa força é a união: <br />
            juntos, construímos resultados que transformam
          </h1>

          <div className="cards-container">
            <div className="card">Card 1</div>
            <div className="card">Card 2</div>
            <div className="card">Card 3</div>
            <div className="card">Card 4</div>
          </div>
        </section>

        <section className="bottom-section">
          <div className="content-wrapper">
            <div className="left-side">
              <h2 className="side-title">Nossos Colaboradores</h2>
              <p className="side-text">No cerne da excelência em transporte e
                                        soluções logísticas, a união estratégica
                                        de Negreira, Distribuidora Safari, Velpack,
                                        STE Fios e GR5 Logística nos posiciona
                                        como seu parceiro ideal. Juntos,
                                        otimizamos cadeias de suprimentos com
                                        expertise diversificada e agilidade
                                        incomparável, garantindo que sua
                                        demanda seja atendida com a máxima
                                        eficiência e profissionalismo.</p>
            </div>

            <div className="vertical-line" />

            <div className="right-side">
              <h2 className="side-title">Que tal se juntar a nós?</h2>
              <p className="side-text">Na IAgora, convidamos você a elevar seu
                                        padrão digital. Com um portfólio que já
                                        ultrapassa 10 milhões em aplicações,
                                        desenvolvemos sites e plataformas
                                        estrategicamente estruturadas para otimizar,
                                        agilizar e impulsionar o seu progresso com excelência.</p>
            </div>
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
          background-color: #aaa9b0;
          padding: 80px 60px;
          text-align: center;
        }

        .title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 60px;
          color: #110711;
        }

        .cards-container {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .card {
          background-color: white;
          width: 270px;
          height: 270px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 18px;
        }

        .bottom-section {
          background-color: #292c31;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
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

        .left-side, .right-side {
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
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #0074BB;
        }

        .side-text {
          font-size: 22px;
          line-height: 1.5;
          color: #FFFFFF;
          justify-content: left;
          text-align: left;
        }

        .vertical-line {
          width: 2px;
          background-color: white;
          height: 60%;
          margin: 0 40px;
        }
      `}</style>
    </>
  );
}
