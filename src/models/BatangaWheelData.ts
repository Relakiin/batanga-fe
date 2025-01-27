export interface BatangaWheelData {
    name: string;
    description: string;
    extraSpin?: ExtraSpinData;
    special?: boolean;
  }
  
  interface ExtraSpinData {
    options?: string[];
  }