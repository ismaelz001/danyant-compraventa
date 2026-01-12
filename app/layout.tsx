import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danyant Automóviles",
  description: "Tu nuevo coche te espera.",
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.className} bg-[#020617] antialiased text-white min-h-screen selection:bg-blue-500/30`}>
        {/* Subtle Noise Texture Overlay for Premium Feel */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.045] mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
        
        {/* Main Content Wrapper */}
        <div className="relative z-10 w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
