"use client";

import { useState } from "react";

export function ClothReveal({ onReveal }: { onReveal: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleReveal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
      onReveal();
    }, 1000); // Matches transition duration
  };

  if (!isVisible) return null;

  return (
    <div 
      onClick={handleReveal}
      className={`absolute inset-0 z-30 cursor-pointer transition-all duration-1000 ease-in-out bg-black ${
        isAnimating ? "translate-y-full opacity-0 scale-110" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Background Cloth Texture */}
      <img
        src="/cars/car-cover.jpg"
        alt="Car covered"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      
      {/* Tap Hint Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-pulse">
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/30 mb-3 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
              </svg>
            </div>
            <p className="text-white/80 font-medium text-sm tracking-[0.2em] uppercase">Toca para descubrir</p>
          </div>
      </div>
    </div>
  );
}
