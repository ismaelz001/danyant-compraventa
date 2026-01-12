export function formatEUR(value: number): string {
  // simple formatting for Spanish locale
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("es-ES").format(value);
}

export function buildWhatsAppUrl(phoneE164: string, text: string): string {
  // phoneE164 like: "34XXXXXXXXX" (without +)
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${phoneE164}?text=${encoded}`;
}
