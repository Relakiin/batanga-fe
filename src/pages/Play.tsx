import { useState, useEffect } from 'react';
import { modifiers, restrictions } from '../data/batangaWheelData.ts';
import {
  BatangaTableData,
  BatangaWheelData,
} from '../models/BatangaWheelData.ts';
import { mapWheelOptions } from '../utils/batangaWheelDataMapper.tsx';
import BatangaTable from '../components/BatangaTable.tsx';
import BatangaWheel from '../components/BatangaWheel.tsx';
import { useScreenDetector } from '../hooks/useScreenDetector.ts';

function Play() {
  const { isMobile } = useScreenDetector();
  const modifierWheelOptions = mapWheelOptions(modifiers);
  const restrictionWheelOptions = mapWheelOptions(restrictions);
  const [tableContent, setTableContent] = useState<BatangaTableData[]>([]);
  const [latestEntry, setLatestEntry] = useState<BatangaWheelData | null>(null);

  const handleSelection = (
    result: string,
    type: 'Modificatore' | 'Restrizione',
    dataList: BatangaWheelData[]
  ) => {
    const selectedItem = dataList.find((item) => item.name === result);
    if (!selectedItem) return;

    setTableContent((prev) => [...prev, { type, data: selectedItem }]);
    setLatestEntry(selectedItem);
  };

  useEffect(() => {
    if (isMobile && latestEntry) {
      const modal = document.getElementById(
        `modal_${latestEntry.id}`
      ) as HTMLFormElement;
      if (modal) modal.showModal();
      setLatestEntry(null);
    }
  }, [tableContent, isMobile, latestEntry]);

  return (
    <div className="text-base-content min-h-screen w-full bg-cover bg-radial from-orange-500 to-orange-300 p-4">
      <div className="grid md:grid-cols-1 lg:flex gap-4 items-start">
        {/* Modificatori */}
        <div className="card col-span-1 lg:flex-1 bg-base-200 shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-center">Modificatori</h2>
          <BatangaWheel
            items={modifierWheelOptions}
            onResult={(result) =>
              handleSelection(result, 'Modificatore', modifiers)
            }
          />
        </div>

        {/* Restrizioni */}
        <div className="card col-span-1 lg:flex-1 bg-base-200 shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-center">Restrizioni</h2>
          {
            <BatangaWheel
              items={restrictionWheelOptions}
              onResult={(result) =>
                handleSelection(result, 'Restrizione', restrictions)
              }
            />
          }
        </div>

        {/* Tabella con info */}
        <div className="col-span-1 lg:flex-2">
          <BatangaTable data={tableContent} />
        </div>
      </div>
    </div>
  );
}

export default Play;
