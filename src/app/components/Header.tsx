"use client";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="home">
            <img src="/logo.png" alt="Logo da empresa" />
          </a>
        </div>

        <div className="nav-links">
          <a href="home">Home</a>
          <a href="sobre">Sobre</a>
          <a href="produtos">Produtos</a>
          <a href="servicos">Serviços</a>
          <a href="contato">Contato</a>
        </div>
      </nav>
    </header>
  );
}
