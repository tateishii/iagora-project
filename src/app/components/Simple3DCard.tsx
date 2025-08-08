"use client";

import React, { useRef, useEffect } from "react";

interface Simple3DCardProps {
  imageSrc: string;
  alt?: string;
  href: string;
}

const Simple3DCard: React.FC<Simple3DCardProps> = ({ imageSrc, alt, href }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const target = useRef({ rotateX: 0, rotateY: 0, scale: 1 });
  const current = useRef({ rotateX: 0, rotateY: 0, scale: 1 });
  const animationFrameId = useRef<number | null>(null);

  const maxRotation = 15; // máximo grau de rotação

  const animate = () => {
    const card = cardRef.current;
    if (!card) return;

    current.current.rotateX += (target.current.rotateX - current.current.rotateX) * 0.1;
    current.current.rotateY += (target.current.rotateY - current.current.rotateY) * 0.1;
    current.current.scale += (target.current.scale - current.current.scale) * 0.1;

    card.style.transform = `rotateX(${current.current.rotateX}deg) rotateY(${current.current.rotateY}deg) scale(${current.current.scale})`;

    if (
      Math.abs(target.current.rotateX - current.current.rotateX) > 0.01 ||
      Math.abs(target.current.rotateY - current.current.rotateY) > 0.01 ||
      Math.abs(target.current.scale - current.current.scale) > 0.01
    ) {
      animationFrameId.current = requestAnimationFrame(animate);
    } else {
      animationFrameId.current = null;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    // Calcula posição relativa do mouse, centrando em 0
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 a +0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 a +0.5

    // Atualiza destino com rotação limitada e invertida no eixo X para efeito realista
    target.current.rotateX = -y * maxRotation;
    target.current.rotateY = x * maxRotation;

    target.current.scale = 1.05;

    if (!animationFrameId.current) {
      animationFrameId.current = requestAnimationFrame(animate);
    }
  };

  const handleMouseLeave = () => {
    target.current = { rotateX: 0, rotateY: 0, scale: 1 };
    if (!animationFrameId.current) {
      animationFrameId.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <a href={href} style={{ display: "inline-block" }}>
      <div
        ref={cardRef}
        className="simple-3d-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imageSrc} alt={alt} />
      </div>

      <style jsx>{`
        .simple-3d-card {
          width: 300px;
          height: 300px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          background: #eee;
          will-change: transform;
          perspective: 1000px;
          cursor: pointer;
          transition: box-shadow 0.3s ease;
        }

        .simple-3d-card:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
        }

        .simple-3d-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
          user-select: none;
        }
      `}</style>
    </a>
  );
};

export default Simple3DCard;
