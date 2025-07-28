"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={scrolled ? "header shrink" : "header"}>
        <div className="container">
          <img src="/logo.png" className="logo" alt="Logo da empresa" />
          <nav>
            <a href="/home">Home</a>
            <a href="/sobre">Sobre</a>
            <a href="/produtos">Produtos</a>
            <a href="/servicos">Serviços</a>
            <a href="/contato">Contato</a>
          </nav>
        </div>

        <style jsx>{`
          .header {
            background: #110711;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            height: 70px;
            align-items: center;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
          }

          .shrink {
            height: 50px;
          }

          .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 0 3rem;
            height: 100%;
            color: white;
          }

          .logo {
            height: 100px;
            object-fit: contain;
            transition: all 0.3s ease;
          }

          .shrink .logo {
            height: 40px;
          }

          nav {
            display: flex;
            gap: 2rem;
          }

          nav a {
            text-decoration: none;
            color: inherit;
            font-weight: 500;
            transition: color 0.2s ease;
          }

          nav a:hover {
            color: #0070f3;
          }
        `}</style>
      </header>
    </>
  );
}
