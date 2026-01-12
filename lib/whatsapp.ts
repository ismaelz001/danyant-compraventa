import type { Car } from "@/components/reels/types";
import { formatNumber } from "./format";

export type AppointmentData = {
  nombre: string;
  telefono: string;
  preferencia: "mañana" | "tarde" | "";
  fecha: string;
  comentario: string;
};

/**
 * Genera un mensaje de WhatsApp para expresar interés general en un coche
 */
export function buildInterestMessage(car: Car): string {
  return (
    `Hola, me interesa el coche:\n\n` +
    `🚗 *${car.title}*\n` +
    `📅 ${car.year}\n` +
    `🛣️ ${formatNumber(car.km)} km\n\n` +
    `¿Podríamos concretar una cita para verlo?`
  );
}

/**
 * Genera un mensaje de WhatsApp para pedir una cita con datos del formulario
 */
export function buildAppointmentMessage(
  carTitle: string,
  data: AppointmentData
): string {
  let msg = `Hola, quiero pedir cita para ver el coche:\n\n`;
  msg += `🚗 *${carTitle}*\n\n`;
  msg += `👤 *Nombre:* ${data.nombre}\n`;
  msg += `📱 *Teléfono:* ${data.telefono}\n`;

  if (data.preferencia) {
    msg += `🕐 *Preferencia:* ${data.preferencia === "mañana" ? "Mañana (10:00-14:00)" : "Tarde (16:30-20:00)"}`;
    if (data.fecha) {
      msg += ` - Día: ${data.fecha}`;
    }
    msg += `\n`;
  }

  if (data.comentario.trim()) {
    msg += `💬 *Comentario:* ${data.comentario}\n`;
  }

  msg += `\n¡Gracias!`;

  return msg;
}

/**
 * Genera un mensaje genérico cuando no hay coche específico seleccionado
 */
export function buildGeneralInquiryMessage(): string {
  return "Hola, quiero información sobre los coches disponibles y concretar una cita para verlos.";
}
