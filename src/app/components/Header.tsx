"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={scrolled ? "header shrink" : "header"}>
        <div className="container">
          <Link href="/" scroll={true}>
            <img src="/logo.png" className="logo" alt="Logo da empresa" />
          </Link>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/produtos">Produtos</Link>
            <Link href="/servicos">Serviços</Link>
          </nav>
        </div>

        <style jsx>{`
          .header {
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(4px);
            position: fixed;
            top: 0;
            width: 100%;
            height: 70px;
            display: flex;
            align-items: center;
            z-index: 1000;
            transition: all 0.3s ease;
          }

          .shrink {
            height: 50px;
          }

          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 0 3rem;
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
            color: white;
            text-decoration: none;
            font-weight: 600;
          }

          /* ===== MOBILE ===== */
          @media (max-width: 768px) {
            .logo {
              display: none;
            }

            /* Faz o container não ter logo e centralizar nav */
            .container {
              justify-content: center;
            }

            nav {
              gap: 1.5rem;
            }
          }
        `}</style>
      </header>
    </>
  );
}
