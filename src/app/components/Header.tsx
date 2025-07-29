"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
import { BlockList } from "net";

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
          <Link href="/" scroll={true}>
          <img src="/logo.png" className="logo" alt="Logo da empresa" style={{cursor: "pointer", display: "block"}}/>
          </Link>
          <nav>
            <Link href="/" scroll={true}>Home</Link>
            <a href="/sobre">Sobre</a>
            <a href="/produtos">Produtos</a>
            <Link href="/Desenvolvimento">Serviços</Link>
            <a href="/contato">Contato</a>
          </nav>
        </div>

        <style jsx>{`
          .header {
            background: rgba(17, 7, 17, 0.9);
            backdrop-filter: blur(4px);
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
            display: block;
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
            color: white;
            font-weight: 500;
            transition: color 0.2s ease;
          }

          nav a:hover {
            color: #0070f3;
          }

          nav a:visited,
          nav a:active,
          nav a:focus {
            color: white;
            outline: none;
            box-shadow: none;
          }
        `}</style>
      </header>
    </>
  );
}
