"use client";

import type { Car } from "./types";
import { useEffect } from "react";

export type Filters = {
  maxPrice?: number;
  fuel?: Car["fuel"] | "Cualquiera";
  gearbox?: Car["gearbox"] | "Cualquiera";
  eco?: Car["eco"] | "Cualquiera";
};

export function applyFilters(cars: Car[], f: Filters): Car[] {
  return cars.filter((c) => {
    if (typeof f.maxPrice === "number" && c.price > f.maxPrice) return false;
    if (f.fuel && f.fuel !== "Cualquiera" && c.fuel !== f.fuel) return false;
    if (f.gearbox && f.gearbox !== "Cualquiera" && c.gearbox !== f.gearbox) return false;
    if (f.eco && f.eco !== "Cualquiera" && c.eco !== f.eco) return false;
    return true;
  });
}

export function FiltersSheet({
  open,
  value,
  onChange,
  onClose,
}: {
  open: boolean;
  value: Filters;
  onChange: (v: Filters) => void;
  onClose: () => void;
}) {
  // Lock body scroll when sheet is open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute bottom-0 inset-x-0 bg-white text-black rounded-t-[28px] max-h-[85vh] overflow-y-auto">
        <div className="p-4">
          <div className="mx-auto w-10 h-1.5 rounded-full bg-black/20" />
          <div className="mt-3 flex items-center justify-between">
            <h2 className="text-lg font-bold">Filtros</h2>
            <button 
              type="button"
              className="text-sm font-semibold hover:text-black/70 transition-colors" 
              onClick={() => onChange({})}
            >
              Limpiar
            </button>
          </div>
        </div>

        <div className="px-5 pb-6 space-y-4">
          <label className="block">
            <div className="text-sm font-semibold mb-1">Precio máximo (€)</div>
            <input
              type="number"
              value={value.maxPrice ?? ""}
              onChange={(e) => onChange({ ...value, maxPrice: e.target.value ? Number(e.target.value) : undefined })}
              className="w-full rounded-xl border border-black/15 px-4 py-3 outline-none transition-colors focus:border-black/40 focus:ring-2 focus:ring-black/10"
              placeholder="Ej: 20000"
            />
          </label>

          <RowSelect
            label="Combustible"
            value={value.fuel ?? "Cualquiera"}
            options={["Cualquiera", "Gasolina", "Diésel", "Híbrido", "Eléctrico", "GLP", "GNC"]}
            onChange={(fuel) => onChange({ ...value, fuel: fuel as any })}
          />

          <RowSelect
            label="Caja"
            value={value.gearbox ?? "Cualquiera"}
            options={["Cualquiera", "Manual", "Automático"]}
            onChange={(gearbox) => onChange({ ...value, gearbox: gearbox as any })}
          />

          <RowSelect
            label="Etiqueta"
            value={value.eco ?? "Cualquiera"}
            options={["Cualquiera", "0", "ECO", "C", "B", "A"]}
            onChange={(eco) => onChange({ ...value, eco: eco as any })}
          />

          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-xl bg-black text-white py-3 font-semibold transition-all duration-150 hover:bg-black/90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            Ver resultados
          </button>
        </div>
      </div>
    </div>
  );
}

function RowSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <div className="text-sm font-semibold mb-1">{label}</div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-black/15 px-4 py-3 outline-none bg-white transition-colors focus:border-black/40 focus:ring-2 focus:ring-black/10 cursor-pointer"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
