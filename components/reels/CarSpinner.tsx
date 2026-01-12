"use client";

import { useState, useRef, useEffect } from "react";

interface CarSpinnerProps {
  images: string[];
  autoPlay?: boolean;
}

export function CarSpinner({ images, autoPlay = true }: CarSpinnerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-play logic
  useEffect(() => {
    if (!autoPlay || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500); // Rotate every 1.5s

    return () => clearInterval(interval);
  }, [autoPlay, isDragging, images.length]);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    startX.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;

    const diff = clientX - startX.current;
    if (Math.abs(diff) > 50) { // Sensory threshold
      if (diff > 0) {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      } else {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
      startX.current = clientX;
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing touch-none select-none"
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`View ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          draggable={false}
        />
      ))}

      {/* Watermark Logo (Bottom Left) */}
      <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
        <img 
          src="/logo-danyant-hd.png" 
          alt="Danyant" 
          className="w-12 md:w-14 object-contain mix-blend-screen filter contrast-130 brightness-110 opacity-40" 
        />
      </div>

      {/* 360 Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur px-3 py-1 rounded-full text-white/80 text-xs font-medium z-20 pointer-events-none flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 animate-spin-slow">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
        360° View
      </div>
    </div>
  );
}
