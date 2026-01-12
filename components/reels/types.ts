export type Car = {
  id: string;
  title: string;
  subtitle?: string; // "2019 · 78.000 km · Automático"
  price: number; // euros
  monthlyFrom?: number; // euros/mes (orientativo)
  year: number;
  km: number;
  fuel: "Gasolina" | "Diésel" | "Híbrido" | "Eléctrico" | "GLP" | "GNC";
  gearbox: "Manual" | "Automático";
  eco: "0" | "ECO" | "C" | "B" | "A";
  location: string;
  highlights: string[];
  videoUrl: string;
  images: string[];
  descriptionShort: string;
  descriptionLong: string;
  workshopNotes?: string[]; // transparencia del taller
  warrantyMonths?: number;
};
