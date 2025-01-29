export interface BatangaWheelData {
    name: string;
    description: string;
    id: string;
    extraSpin?: ExtraSpinData;
    special?: boolean;
  }
  
  interface ExtraSpinData {
    options?: string[];
  }