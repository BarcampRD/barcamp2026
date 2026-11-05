export type EventStage = 'PLANNING' | 'CALL_FOR_SPEAKERS' | 'REGISTRATION' | 'TICKETS_SALE' | 'LIVE' | 'POST_EVENT';

export interface EventFeatures {
  showCallForSpeakers: boolean;
  showKeynote: boolean;
  showTicketPurchase: boolean;
  showConfirmedSpeakers: boolean;
  showAgenda: boolean;
  showSpeakersToAnounce: boolean;
  showSponsors: boolean;
  /** La vitrina de mercancía: deja de tener sentido cuando el evento ya pasó. */
  showMerch: boolean;
  showThanks: boolean;
  showRegister: boolean;
}

export const STAGE_FEATURES: Record<EventStage, EventFeatures> = {
  PLANNING: {
    showCallForSpeakers: true,
    showKeynote: true,
    showConfirmedSpeakers: true,
    showAgenda: true,
    showTicketPurchase: true,
    showSpeakersToAnounce: false,
    showSponsors: true,
    showMerch: true,
    showThanks: true,
    showRegister: true,
  },
  // La inscripción abrió mientras el CFP sigue recibiendo propuestas: las dos
  // llamadas conviven en esta etapa. Los charlistas confirmados se muestran.
  CALL_FOR_SPEAKERS: {
    showCallForSpeakers: true,
    showConfirmedSpeakers: true,
    showAgenda: false,
    showKeynote: false,
    showTicketPurchase: true,
    showSpeakersToAnounce: false,
    showSponsors: true,
    showMerch: true,
    showThanks: false,
    showRegister: true,
  },
  // El CFP cerró y la inscripción sigue abierta. La agenda todavía no está
  // elegida, así que no se muestra: la sección de agenda desaparece entera
  // hasta TICKETS_SALE, y con ella el enlace del menú.
  REGISTRATION: {
    showCallForSpeakers: false,
    showConfirmedSpeakers: true,
    showAgenda: false,
    showKeynote: false,
    showTicketPurchase: true,
    showSpeakersToAnounce: true,
    showSponsors: true,
    showMerch: true,
    showThanks: false,
    showRegister: true,
  },
  TICKETS_SALE: {
    showTicketPurchase: true,
    showKeynote: true,
    showCallForSpeakers: false,
    showAgenda: true,
    showConfirmedSpeakers: true,
    showSpeakersToAnounce: false,
    showSponsors: true,
    showMerch: true,
    showThanks: false,
    showRegister: true,
  },
  LIVE: {
    showTicketPurchase: false,
    showKeynote: true,
    showCallForSpeakers: false,
    showAgenda: true,
    showConfirmedSpeakers: true,
    showSpeakersToAnounce: false,
    showSponsors: true,
    showMerch: true,
    showThanks: false,
    showRegister: false,
  },
  POST_EVENT: {
    showTicketPurchase: false,
    showKeynote: true,
    showCallForSpeakers: false,
    showAgenda: true,
    showConfirmedSpeakers: true,
    showSpeakersToAnounce: false,
    showSponsors: true,
    showMerch: false,
    showThanks: true,
    showRegister: false,
  },
};

const CURRENT_STAGE = (process.env.NEXT_PUBLIC_EVENT_STAGE as EventStage) || 'REGISTRATION';

export const currentFeatures = STAGE_FEATURES[CURRENT_STAGE];
