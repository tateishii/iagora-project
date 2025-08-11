"use client";

import React, { useRef, useEffect } from "react";

interface Simple3DCardProps {
  imageSrc: string;
  alt?: string;
  href: string;
  className?: string;
}

const Simple3DCard: React.FC<Simple3DCardProps> = ({ imageSrc, alt, href, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const target = useRef({ rotateX: 0, rotateY: 0, scale: 1 });
  const current = useRef({ rotateX: 0, rotateY: 0, scale: 1 });
  const animationFrameId = useRef<number | null>(null);

  const maxRotation = 10; 

  const animate = () => {
    const card = cardRef.current;
    if (!card) return;

    current.current.rotateX += (target.current.rotateX - current.current.rotateX) * 0.1;
    current.current.rotateY += (target.current.rotateY - current.current.rotateY) * 0.1;
    current.current.scale += (target.current.scale - current.current.scale) * 0.1;

    card.style.transform = `perspective(900px) rotateX(${current.current.rotateX}deg) rotateY(${current.current.rotateY}deg) scale(${current.current.scale})`;
    card.style.transition = "box-shadow 0.3s ease";

    if (
      Math.abs(target.current.rotateX - current.current.rotateX) > 0.01 ||
      Math.abs(target.current.rotateY - current.current.rotateY) > 0.01 ||
      Math.abs(target.current.scale - current.current.scale) > 0.001
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

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    target.current.rotateX = -y * maxRotation;
    target.current.rotateY = x * maxRotation;

    target.current.scale = 1.03;

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
    <a href={href} style={{ display: "inline-block" }} className={className}>
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
          cursor: pointer;
          transform-style: preserve-3d;
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
          border-radius: 20px;
        }
      `}</style>
    </a>
  );
};

export default Simple3DCard;
