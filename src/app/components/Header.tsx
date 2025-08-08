"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';

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
            <img src="/logo.png" className="logo" alt="Logo da empresa" style={{ cursor: "pointer", display: "block" }} />
          </Link>
          <nav>
            <Link href="/" scroll={true} style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>Home</Link>
            <Link href="/Sobre" style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>Sobre</Link>
            <Link href="/Produtos" style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>Produtos</Link>
            <Link href="/Servicos" style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>Serviços</Link>
            {/* <Link href="/contato" className="link">Contato</Link> */}
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

          .link {
            color: black;
            text-decoration: none;
            font-weight: 600;
            cursor: pointer;
            transition: color 0.3s ease;
          }

          .link:hover {
            color: #0074bb;
          }


        `}</style>
      </header>
    </>
  );
}
