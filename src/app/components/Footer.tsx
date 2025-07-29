// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer-final">
        <div className="footer-left">
          <h3>IAgora Tecnologia</h3>
          <p>© 2025 Todos os direitos reservados.</p>
        </div>
        <div className="footer-right">
          <a
            href="https://www.instagram.com/iagora.tec?igsh=MTZmYm5nbHJqcHNucw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src="/instagram-icon.svg" alt="Instagram" />
          </a>
          <a
            href="https://wa.me/11956538444"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <img src="/whatsapp-icon.svg" alt="WhatsApp" />
          </a>
        </div>
      </footer>

      <style jsx>{`
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

        .footer-right img.whatsapp {
          width: 40px;
          height: 40px;
          object-fit: contain;
          margin-top: 4px;
        }
      `}</style>
    </>
  );
}
