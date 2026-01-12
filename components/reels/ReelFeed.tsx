"use client";

import { useMemo, useState } from "react";
import type { Car } from "./types";
import { ReelCard } from "./ReelCard";
import { CarSheet } from "./CarSheet";
import { FloatingActions } from "./FloatingActions";
import { FiltersSheet, applyFilters, type Filters } from "./FiltersSheet";

export function ReelFeed({ cars }: { cars: Car[] }) {
  const [openCar, setOpenCar] = useState<Car | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({});

  const filtered = useMemo(() => applyFilters(cars, filters), [cars, filters]);

  return (
    <section className="px-3 py-4">
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
          No hay coches con esos filtros. Prueba a limpiar filtros.
        </div>
      ) : null}

      <div className="mx-auto max-w-md w-full pb-20 pt-2">
        {filtered.map((car) => (
          <ReelCard key={car.id} car={car} onOpen={setOpenCar} />
        ))}
      </div>

      <FloatingActions
        onOpenFilters={() => setFiltersOpen(true)}
        currentCarTitle={openCar?.title}
      />

      <FiltersSheet
        open={filtersOpen}
        value={filters}
        onChange={setFilters}
        onClose={() => setFiltersOpen(false)}
      />

      {openCar ? <CarSheet car={openCar} onClose={() => setOpenCar(null)} /> : null}
    </section>
  );
}
