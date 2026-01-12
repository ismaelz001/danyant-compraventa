import { ReelFeed } from "@/components/reels/ReelFeed";
import { cars } from "@/lib/demoData";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative">
      {/* Premium Sticky Header */}
      <header className="sticky top-0 z-40 w-full bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="mx-auto max-w-xl w-full px-4 h-24 flex items-center justify-between">
          {/* Brand Composition - HD Render */}
          <div className="flex items-center justify-center -ml-4 select-none group cursor-pointer transition-transform duration-500 hover:scale-105">
             <img 
               src="/logo-danyant-hd.png" 
               alt="Danyant Automóviles" 
               className="h-20 w-auto object-contain mix-blend-screen filter contrast-150 brightness-110" 
             />
          </div>
          
          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-full hover:bg-white/5 active:scale-95 transition-all text-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            <button className="p-2.5 rounded-full hover:bg-white/5 active:scale-95 transition-all text-white/80 relative group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              <span className="absolute top-2.5 right-2 w-2 h-2 rounded-full bg-blue-500 border border-black group-hover:animate-ping"></span>
              <span className="absolute top-2.5 right-2 w-2 h-2 rounded-full bg-blue-500 border border-black"></span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Feed Container */}
      <ReelFeed cars={cars} />

      {/* Footer */}
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
