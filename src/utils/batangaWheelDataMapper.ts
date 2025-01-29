import { MenuItem } from '../components/Menu';
import { BatangaWheelData } from '../models/BatangaWheelData';
import { RouletteItem } from 'react-hook-roulette';

export const mapWheelOptions = (data: BatangaWheelData[]): RouletteItem[] => {
  return data.map((entry) => {
    return {
      name: entry.name,
    };
  });
};

export const mapDataToMenu = (data: BatangaWheelData[]): MenuItem[] => {
  return data.map((entry) => {
    return {
      name: entry.name,
      id: entry.id,
    };
  });
};