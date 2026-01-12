"use client";

import type { Car } from "./types";
import { CarSpinner } from "./CarSpinner";
import { ClothReveal } from "./ClothReveal";
import { buildWhatsAppUrl, formatEUR, formatNumber } from "@/lib/format";
import { WHATSAPP_PHONE } from "@/lib/demoData";
import { useMemo, useEffect, useState } from "react";
import { AppointmentSheet } from "./AppointmentSheet";
import { buildInterestMessage } from "@/lib/whatsapp";

export function CarSheet({ car, onClose }: { car: Car; onClose: () => void }) {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const waHref = useMemo(() => {
    const msg = buildInterestMessage(car);
    return buildWhatsAppUrl(WHATSAPP_PHONE, msg);
  }, [car]);

  const speak = () => {
    if (typeof window === "undefined") return;
    if (!("speechSynthesis" in window)) return;

    const pitch =
      `Este ${car.title} del ${car.year} con ${formatNumber(car.km)} kilómetros. ` +
      `${car.descriptionShort} ` +
      `${car.warrantyMonths ? `Se entrega con garantía de ${car.warrantyMonths} meses. ` : ""}` +
      `¿Quieres que concretemos una cita para verlo?`;

    const u = new SpeechSynthesisUtterance(pitch);
    u.lang = "es-ES";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  // Lock body scroll when sheet is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute bottom-0 inset-x-0 bg-white text-black rounded-t-[28px] max-h-[88vh] overflow-y-auto">
        <div className="p-4">
          <div className="mx-auto w-10 h-1.5 rounded-full bg-black/20" />
        </div>

        <div className="px-5 pb-6">
          <div className="rounded-2xl overflow-hidden bg-black aspect-[16/10] border border-black/10 group relative">
            
            {/* 1. LAYER: Cloth Reveal (Always on top initially) */}
            <ClothReveal onReveal={() => {}} />

            {/* 2. LAYER: Content (Spinner or Static Image) */}
            {["car_001", "car_002", "car_003"].includes(car.id) ? (
              <CarSpinner 
                images={
                  car.id === "car_001" ? [
                    "/cars/bmw360/01.jpg", "/cars/bmw360/02.jpg", "/cars/bmw360/03.jpg", "/cars/bmw360/04.jpg", "/cars/bmw-320d.jpg"
                  ] : car.id === "car_002" ? [
                    "/cars/audi360/01.jpg", "/cars/audi360/02.jpg", "/cars/audi360/03.jpg", "/cars/audi360/04.jpg", "/cars/audi-a4.jpg"
                  ] : [
                    "/cars/mercedes360/01.jpg", "/cars/mercedes360/02.jpg", "/cars/mercedes360/03.jpg", "/cars/mercedes360/04.jpg", "/cars/mercedes-c-class.jpg"
                  ]
                } 
              />
            ) : (
              <img 
                src={car.images[0]} 
                alt={car.title}
                className="h-full w-full object-cover" 
              />
            )}
          </div>

          <div className="mt-4 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="text-xl font-extrabold leading-tight">{car.title}</h2>
              <p className="text-sm text-black/60 mt-1">
                {car.year} · {formatNumber(car.km)} km · {car.fuel} · {car.gearbox} · {car.eco} · {car.location}
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-2xl font-extrabold">{formatEUR(car.price)}</div>
              {car.monthlyFrom ? (
                <div className="text-xs text-black/60">desde {formatEUR(car.monthlyFrom)}/mes (orientativo)</div>
              ) : null}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {car.highlights.map((h) => (
              <span key={h} className="rounded-full bg-black/5 border border-black/10 px-3 py-1 text-xs font-semibold">
                {h}
              </span>
            ))}
          </div>

          <p className="mt-4 text-black/80 leading-relaxed">{car.descriptionLong}</p>

          {car.workshopNotes?.length ? (
            <div className="mt-5">
              <h3 className="font-bold">Transparencia del taller</h3>
              <ul className="mt-2 space-y-1 text-sm text-black/80 list-disc pl-5">
                {car.workshopNotes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-emerald-500 text-black py-3 font-semibold text-center transition-all duration-150 hover:bg-emerald-400 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              WhatsApp ahora
            </a>
            <button
              type="button"
              onClick={speak}
              className="rounded-xl border border-black/15 py-3 font-semibold transition-all duration-150 hover:bg-black/5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
              aria-label="Escuchar descripción del coche con síntesis de voz"
            >
              Te lo explico en 20s
            </button>
            <button
              type="button"
              onClick={() => setAppointmentOpen(true)}
              className="rounded-xl bg-black text-white py-3 font-semibold text-center transition-all duration-150 hover:bg-black/90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              Pedir cita
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-4 w-full rounded-xl bg-black/5 border border-black/10 py-3 font-semibold transition-all duration-150 hover:bg-black/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            aria-label="Cerrar y volver al feed"
          >
            Volver
          </button>
        </div>
      </div>

      {appointmentOpen && (
        <AppointmentSheet
          carTitle={car.title}
          onClose={() => setAppointmentOpen(false)}
        />
      )}
    </div>
  );
}
