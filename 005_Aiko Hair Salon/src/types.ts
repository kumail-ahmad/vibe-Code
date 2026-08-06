export interface PortfolioItem {
  id: string;
  title: string;
  category: 'CUT' | 'COLOUR' | 'STYLE' | 'EXTENSIONS';
  subtitle: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'tall';
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
}

export type CursorState = 'DEFAULT' | 'VIEW' | 'DRAG' | 'EXPLORE' | 'OPEN';
