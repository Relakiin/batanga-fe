export interface BatangaTableData {
  player?: string;
  type: string;
  data: BatangaWheelData;
}

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
