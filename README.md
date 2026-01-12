# ReelCars (demo)
Feed tipo reels para un taller/concesionario (vendedor único) con WhatsApp + pedir cita (sin pagos).

## Requisitos
- Node 18+ (recomendado 20)
- npm

## Arranque
```bash
npm install
npm run dev
```
Abre: http://localhost:3000

## Qué tocar primero
1) `lib/demoData.ts`:
   - Cambia `WHATSAPP_PHONE` por el número real (sin +).
   - Cambia `videoUrl` y `images` por contenido real de coches.
2) Ajusta texto/branding en `app/page.tsx`.

## Cómo meter tus coches
Lo ideal es crear un endpoint / admin, pero para empezar:
- Edita `lib/demoData.ts` y pega coches nuevos con su `videoUrl` y fotos.

## Roadmap fácil (cuando os pongáis serios)
- Admin sencillo para subir coches (video/fotos) + estado (Disponible/Reservado/Vendido)
- Calendario real de citas (Google Calendar o Calendly) o API propia
- SEO: página por coche `/coche/[id]` para indexación (ahora es una SPA feed)
