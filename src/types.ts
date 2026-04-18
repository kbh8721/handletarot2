import { TarotCard } from './constants/tarotCards';

export interface Reading {
  id: string;
  timestamp: number;
  type: 'daily' | 'deep';
  topic?: string;
  cards: {
    card: TarotCard;
    isReversed: boolean;
  }[];
  interpretation: string;
}

export interface TarotMaster {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  profileImage: string;
  link: string;
}
