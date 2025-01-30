import { useState } from 'react';
import { modifiers, restrictions } from '../data/batangaWheelData.ts';
import {
  BatangaTableData,
  BatangaWheelData,
} from '../models/BatangaWheelData.ts';
import { mapWheelOptions } from '../utils/batangaWheelDataMapper.tsx';
import BatangaTable from '../components/BatangaTable.tsx';
import BatangaWheel from '../components/BatangaWheel.tsx';

function Play() {
  const modifierWheelOptions = mapWheelOptions(modifiers);
  const restrictionWheelOptions = mapWheelOptions(restrictions);

/*   const [selectedModifier, setSelectedModifier] =
    useState<BatangaWheelData | null>(null);
  const [selectedRestriction, setSelectedRestriction] =
    useState<BatangaWheelData | null>(null); */
  const [tableContent, setTableContent] = useState<BatangaTableData[]>([]);

  const handleModifierSelected = (result: string) => {
    const winner: BatangaWheelData = modifiers.find(
      (modifier) => modifier.name === result
    )!;
    //setSelectedModifier(winner);
    setTableContent((prev) => [
      ...prev,
      {
        type: 'Modificatore',
        data: winner,
        timestamp: new Date(Date.now()),
      },
    ]);
  };
  const handleRestrictionSelected = (result: string) => {
    const winner: BatangaWheelData = restrictions.find(
      (restriction) => restriction.name === result
    )!;
    //setSelectedRestriction(winner);
    setTableContent((prev) => [
      ...prev,
      {
        type: 'Restrizione',
        data: winner,
        timestamp: new Date(Date.now()),
      },
    ]);
  };

  return (
    <div
      className="text-base-content min-h-screen w-full bg-cover bg-radial from-orange-800 to-orange-700 p-4"
    >
      <div className="grid md:grid-cols-1 lg:flex gap-4 items-start">
        {/* Modificatori */}
        <div className="card col-span-1 lg:flex-1 bg-base-200 shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-center">Modificatori</h2>
          <BatangaWheel
            items={modifierWheelOptions}
            onResult={handleModifierSelected}
          />
        </div>

        {/* Restrizioni */}
        <div className="card col-span-1 lg:flex-1 bg-base-200 shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-center">Restrizioni</h2>
          {
            <BatangaWheel
              items={restrictionWheelOptions}
              onResult={handleRestrictionSelected}
            />
          }
        </div>

        {/* Tabella con info */}
        <div className="col-span-1 lg:flex-2 ">
          <BatangaTable data={tableContent} />
        </div>
      </div>
    </div>
  );
}

export default Play;
