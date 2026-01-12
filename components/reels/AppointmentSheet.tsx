"use client";

import { useEffect, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/format";
import { WHATSAPP_PHONE } from "@/lib/demoData";
import { buildAppointmentMessage, type AppointmentData } from "@/lib/whatsapp";


export function AppointmentSheet({
  carTitle,
  onClose,
}: {
  carTitle: string;
  onClose: () => void;
}) {
  const [data, setData] = useState<AppointmentData>({
    nombre: "",
    telefono: "",
    preferencia: "",
    fecha: "",
    comentario: "",
  });

  const [errors, setErrors] = useState<{ nombre?: string; telefono?: string }>({});

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    
    if (!data.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }
    
    if (!data.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio";
    } else if (!/^\d{9,}$/.test(data.telefono.replace(/\s/g, ""))) {
      newErrors.telefono = "Introduce un teléfono válido (mín. 9 dígitos)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const msg = buildAppointmentMessage(carTitle, data);
    const href = buildWhatsAppUrl(WHATSAPP_PHONE, msg);
    window.open(href, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="absolute bottom-0 inset-x-0 bg-white text-black rounded-t-[28px] max-h-[90vh] overflow-y-auto">
        <div className="p-4">
          <div className="mx-auto w-10 h-1.5 rounded-full bg-black/20" />
          <h2 className="text-xl font-bold mt-3">Pedir cita</h2>
          <p className="text-sm text-black/60 mt-1">
            Para ver: <strong>{carTitle}</strong>
          </p>
        </div>

        <div className="px-5 pb-6 space-y-4">
          {/* Nombre */}
          <label className="block">
            <div className="text-sm font-semibold mb-1">
              Nombre <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              value={data.nombre}
              onChange={(e) => setData({ ...data, nombre: e.target.value })}
              className={`w-full rounded-xl border px-4 py-3 outline-none transition-colors focus:ring-2 ${
                errors.nombre
                  ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                  : "border-black/15 focus:border-black/40 focus:ring-black/10"
              }`}
              placeholder="Tu nombre completo"
            />
            {errors.nombre && (
              <div className="text-xs text-red-600 mt-1">{errors.nombre}</div>
            )}
          </label>

          {/* Teléfono */}
          <label className="block">
            <div className="text-sm font-semibold mb-1">
              Teléfono <span className="text-red-500">*</span>
            </div>
            <input
              type="tel"
              value={data.telefono}
              onChange={(e) => setData({ ...data, telefono: e.target.value })}
              className={`w-full rounded-xl border px-4 py-3 outline-none transition-colors focus:ring-2 ${
                errors.telefono
                  ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                  : "border-black/15 focus:border-black/40 focus:ring-black/10"
              }`}
              placeholder="612 345 678"
            />
            {errors.telefono && (
              <div className="text-xs text-red-600 mt-1">{errors.telefono}</div>
            )}
          </label>

          {/* Preferencia horaria */}
          <label className="block">
            <div className="text-sm font-semibold mb-1">Preferencia horaria (opcional)</div>
            <select
              value={data.preferencia}
              onChange={(e) => setData({ ...data, preferencia: e.target.value as any })}
              className="w-full rounded-xl border border-black/15 px-4 py-3 outline-none bg-white transition-colors focus:border-black/40 focus:ring-2 focus:ring-black/10 cursor-pointer"
            >
              <option value="">Sin preferencia</option>
              <option value="mañana">Mañana (10:00 - 14:00)</option>
              <option value="tarde">Tarde (16:30 - 20:00)</option>
            </select>
          </label>

          {/* Fecha opcional */}
          <label className="block">
            <div className="text-sm font-semibold mb-1">Fecha preferida (opcional)</div>
            <input
              type="date"
              value={data.fecha}
              onChange={(e) => setData({ ...data, fecha: e.target.value })}
              className="w-full rounded-xl border border-black/15 px-4 py-3 outline-none transition-colors focus:border-black/40 focus:ring-2 focus:ring-black/10"
              min={new Date().toISOString().split("T")[0]}
            />
          </label>

          {/* Comentario */}
          <label className="block">
            <div className="text-sm font-semibold mb-1">Comentario (opcional)</div>
            <textarea
              value={data.comentario}
              onChange={(e) => setData({ ...data, comentario: e.target.value })}
              className="w-full rounded-xl border border-black/15 px-4 py-3 outline-none transition-colors focus:border-black/40 focus:ring-2 focus:ring-black/10 resize-none"
              placeholder="¿Alguna pregunta o petición especial?"
              rows={3}
            />
          </label>

          {/* Botones */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-black/15 py-3 font-semibold transition-all duration-150 hover:bg-black/5 active:scale-95"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-xl bg-black text-white py-3 font-semibold transition-all duration-150 hover:bg-black/90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              Enviar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
