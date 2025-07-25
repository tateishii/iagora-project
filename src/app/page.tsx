import Hero from "./Hero";

export default function LandingPage() {
  return (
    <>
      <Hero />

      <section id="sobre">
        <div className="section-content">
          <h2>Quem Somos</h2>
          <p>Somos especialistas em transformar ideias em experiências digitais impactantes.</p>
        </div>
      </section>

      <section id="produtos">
        <div className="section-content">
          <h2>Nossos Produtos</h2>
          <p>Qualidade, inovação e resultado. Conheça nossa linha completa.</p>
        </div>
      </section>

      <section id="servicos">
        <div className="section-content">
          <h2>Serviços Personalizados</h2>
          <p>Do planejamento à execução, cuidamos de tudo com excelência.</p>
        </div>
      </section>

      <section id="contato">
        <div className="section-content">
          <h2>Fale Conosco</h2>
          <p>Estamos prontos para transformar seu projeto em realidade.</p>
        </div>
      </section>
    </>
  );
}
