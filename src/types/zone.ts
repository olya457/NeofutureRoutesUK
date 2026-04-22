export type ZoneCategory = 'science' | 'energy' | 'infra' | 'urban' | 'underground';

export interface Zone {
  id: string;
  name: string;
  shortName: string;
  city: string;
  category: ZoneCategory;
  lat: number;
  lon: number;
  tagline: string;
  description: string;
  mapX: number;
  mapY: number;
}

export interface Category {
  id: ZoneCategory | 'all';
  label: string;
  emoji: string;
  color: string;
}
