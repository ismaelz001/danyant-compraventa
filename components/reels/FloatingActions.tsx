"use client";

import { buildWhatsAppUrl } from "@/lib/format";
import { WHATSAPP_PHONE } from "@/lib/demoData";
import { buildGeneralInquiryMessage } from "@/lib/whatsapp";

export function FloatingActions({
  onOpenFilters,
  currentCarTitle,
}: {
  onOpenFilters: () => void;
  currentCarTitle?: string;
}) {
  const msg = currentCarTitle
    ? buildGeneralInquiryMessage() // Cuando están en el feed sin coche abierto, usamos mensaje genérico
    : buildGeneralInquiryMessage();

  const href = buildWhatsAppUrl(WHATSAPP_PHONE, msg);

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 safe-bottom">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="rounded-full px-4 py-3 bg-emerald-500 text-black font-semibold shadow-lg shadow-emerald-500/20 border border-white/10 transition-all duration-150 hover:bg-emerald-400 hover:shadow-emerald-400/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Contactar por WhatsApp"
      >
        WhatsApp
      </a>

      <button
        type="button"
        onClick={onOpenFilters}
        className="rounded-full px-4 py-3 bg-white/10 text-white font-semibold backdrop-blur border border-white/10 transition-all duration-150 hover:bg-white/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        aria-label="Abrir filtros de búsqueda"
      >
        Filtros
      </button>
    </div>
  );
}
