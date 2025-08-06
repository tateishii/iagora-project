"use client";

import React, { useRef } from "react";

interface Simple3DCardProps {
  imageSrc: string;
  alt?: string;
  href: string;
}

const Simple3DCard: React.FC<Simple3DCardProps> = ({ imageSrc, alt, href}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    const rotateX =  (y - 0.5) * -15;
    const rotateY = (x - 0.5) * 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <a href={href}>
      <div
      ref={cardRef}
      className="simple-3d-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      >
        <img src={imageSrc} alt={alt } />
      </div>
      
      <style jsx>{`
        .simple-3d-card {
          width: 300px;
          height: 300px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          background: #eee;
          transition: transform 0.2s ease;
          will-change: transform;
          perspective: 1000px;
        }

        .simple-3d-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
    </a>
  );
};

export default Simple3DCard;