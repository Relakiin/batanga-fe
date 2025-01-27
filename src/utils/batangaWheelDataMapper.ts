import { WheelData } from 'react-custom-roulette/dist/components/Wheel/types';
import { BatangaWheelData } from '../models/BatangaWheelData';

export const mapWheelOptions = (data: BatangaWheelData[]): WheelData[] => {
  return data.map((entry) => {
    return {
      option: entry.name,
    };
  });
};