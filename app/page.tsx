import { ReelFeed } from "@/components/reels/ReelFeed";
import { cars as demoCars } from "@/lib/demoData";
import { getCars } from "@/lib/sanity.client";

export const dynamic = 'force-dynamic'; // Asegura que siempre traigamos datos frescos

export default async function Home() {
  const sanityCars = await getCars();
  
  // Si no hay coches en Sanity, usamos los de demo para no dejar la web vacía
  const displayCars = sanityCars && sanityCars.length > 0 
    ? sanityCars.map((c: any) => ({
        id: c._id,
        title: `${c.brand} ${c.model}`,
        price: c.price,
        year: c.year,
        km: c.km,
        fuel: c.fuel,
        eco: "C", // Valor por defecto
        images: c.images || [],
        video: c.videoUrl || "",
        tags: [c.fuel],
        highlights: [c.description]
      }))
    : demoCars;

  return (
    <main className="min-h-screen bg-transparent relative">
      <header className="sticky top-0 z-40 w-full bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="mx-auto max-w-xl w-full px-4 h-24 flex items-center justify-between">
          <div className="flex items-center justify-center -ml-4 select-none group cursor-pointer transition-transform duration-500 hover:scale-105">
             <img 
               src="/logo-danyant-hd.png" 
               alt="Danyant Automóviles" 
               className="h-20 w-auto object-contain mix-blend-screen filter contrast-150 brightness-110" 
             />
          </div>
          <div className="flex items-center gap-3">
             <button className="p-2.5 rounded-full hover:bg-white/5 active:scale-95 transition-all text-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      <ReelFeed cars={displayCars} />

      <footer className="safe-bottom pb-8 pt-4 text-center">
        <div className="w-full max-w-xs mx-auto border-t border-white/5 pt-6">
            <p className="text-[10px] text-white/30 uppercase tracking-widest">
                Experiencia Digital
            </p>
            <p className="text-xs text-white/50 font-medium mt-1">
                Powered by Danyant
            </p>
        </div>
      </footer>
    </main>
  );
}
