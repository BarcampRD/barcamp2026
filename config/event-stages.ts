export type EventStage = 'PLANNING' | 'CALL_FOR_SPEAKERS' | 'TICKETS_SALE' | 'LIVE' | 'POST_EVENT';

export interface EventFeatures {
  showCallForSpeakers: boolean;
  showKeynote: boolean;
  showTicketPurchase: boolean;
  showConfirmedSpeakers: boolean;
  showAgenda: boolean;
  showSpeakersToAnounce: boolean;
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
    showSpeakersToAnounce: true,
    showThanks: true,
    showRegister: true,
  },
  CALL_FOR_SPEAKERS: {
    showCallForSpeakers: true,
    showConfirmedSpeakers: false,
    showAgenda: false,
    showKeynote: false,
    showTicketPurchase: false,
    showSpeakersToAnounce: true,
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
    showThanks: true,
    showRegister: false,
  },
};

const CURRENT_STAGE = (process.env.NEXT_PUBLIC_EVENT_STAGE as EventStage) || 'CALL_FOR_SPEAKERS';

export const currentFeatures = STAGE_FEATURES[CURRENT_STAGE];
