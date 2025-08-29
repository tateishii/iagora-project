"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="footer-final">
      <div className="footer-left">
        <h3>IAgora Tecnologia</h3>
        <p>© 2025 Todos os direitos reservados.</p>
      </div>
      <div className="footer-right">
        <a
          href="https://www.instagram.com/iagora.tec"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/instagram-icon.svg" alt="Instagram" />
        </a>
        <a
          href="https://wa.me/5511956538444"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/whatsapp-icon.svg" alt="WhatsApp" />
        </a>
      </div>

      <style jsx>{`
        .footer-final {
          width: 100%;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(4px);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 1rem;
          font-family: "Arial", sans-serif;
          flex-wrap: wrap;
          gap: 1rem;
          box-sizing: border-box;
        }

        .footer-left h3 {
          margin: 0 0 0.3rem 0;
          font-weight: bold;
          font-size: 15px;
        }

        .footer-left p {
          margin: 0;
          font-size: 11px;
          opacity: 0.7;
        }

        .footer-right {
          display: flex;
          gap: 1rem;
        }

        .footer-right a {
          display: inline-block;
          transition: opacity 0.3s ease;
        }

        .footer-right a:hover {
          opacity: 0.7;
        }

        .footer-right img {
          width: 27px;
          height: 28px;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .footer-final {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .footer-right {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
