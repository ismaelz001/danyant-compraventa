"use client";

import type { Car } from "./types";
import { formatEUR, formatNumber } from "@/lib/format";
import { useEffect, useState } from "react";

export function ReelCard({ car, onOpen }: { car: Car; onOpen: (car: Car) => void }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect to simulate "video" or active view (Gourmeats style)
  useEffect(() => {
    // Solo rotamos si hay más de una imagen
    if (car.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [car.images.length]);

  return (
    <div className="bg-[#111] rounded-[24px] overflow-hidden border border-white/5 shadow-2xl mb-6 last:mb-20">
      {/* Visual Header / Slider */}
      <div 
        onClick={() => onOpen(car)}
        className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer group"
      >
        {car.images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`${car.title} - view ${idx + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              idx === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            } group-hover:scale-105 transition-transform duration-[2000ms]`}
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
        
        {/* Badges Overlay (Top Left) */}
        <div className="absolute top-3 left-3 z-20 flex gap-2">
          {car.eco !== "0" && (
            <span className="backdrop-blur-md bg-black/40 text-white/90 text-[10px] font-bold px-2 py-1 rounded-full border border-white/10 uppercase tracking-wide">
              Eco {car.eco}
            </span>
          )}
          <span className="backdrop-blur-md bg-emerald-500/90 text-black text-[10px] font-bold px-2 py-1 rounded-full">
            {car.fuel}
          </span>
        </div>

        {/* View Details Hint Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
          <span className="bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium">
            Ver detalles
          </span>
        </div>
      </div>

      {/* Card Body (Info) - Autocasión visual style but sleek dark mode */}
      <div className="p-5" onClick={() => onOpen(car)}>
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-lg font-bold text-white leading-tight mb-1">{car.title}</h3>
            <div className="flex flex-wrap text-sm text-gray-400 gap-x-2 gap-y-1">
              <span>{car.year}</span>
              <span className="text-gray-600">•</span>
              <span>{formatNumber(car.km)} km</span>
              <span className="text-gray-600">•</span>
              <span>{car.gearbox}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-white">{formatEUR(car.price)}</div>
            {car.monthlyFrom && (
              <div className="text-[11px] text-emerald-400 font-medium">
                desde {formatEUR(car.monthlyFrom)}/mes
              </div>
            )}
          </div>
        </div>

        {/* Highlights Chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {car.highlights.slice(0, 2).map((h) => (
            <span 
              key={h} 
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300"
            >
              {h}
            </span>
          ))}
          {car.warrantyMonths && (
             <span className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300">
               {car.warrantyMonths} meses garantía
             </span>
          )}
        </div>
        
        {/* Action Button Strip */}
        <div className="mt-5 pt-4 border-t border-white/5 flex gap-3">
          <button 
            className="flex-1 bg-white text-black font-bold py-2.5 rounded-xl text-sm hover:bg-gray-100 transition-colors"
            onClick={(e) => { e.stopPropagation(); onOpen(car); }}
          >
            Ver Ficha
          </button>
          <button 
            className="px-4 py-2.5 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors"
            aria-label="Guardar favorito"
            onClick={(e) => e.stopPropagation()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
