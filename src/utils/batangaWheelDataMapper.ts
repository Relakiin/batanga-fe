import { BatangaWheelData } from '../models/BatangaWheelData';
import { RouletteItem } from 'react-hook-roulette';

export const mapWheelOptions = (data: BatangaWheelData[]): RouletteItem[] => {
  return data.map((entry) => {
    return {
      name: entry.name,
    };
  });
};