import { useState } from 'react';
import { modifiers, restrictions } from '../utils/batangaWheelData.ts';
import { BatangaWheelData } from '../models/BatangaWheelData.ts';
import { mapWheelOptions } from '../utils/batangaWheelDataMapper.ts';
import barBackground from '../img/bg-bar.jpeg';
import BatangaTable from '../components/BatangaTable.tsx';
import BatangaWheel from '../components/BatangaWheel.tsx';

function Play() {
  const modifierWheelOptions = mapWheelOptions(modifiers);
  const restrictionWheelOptions = mapWheelOptions(restrictions);

  const [selectedModifier, setSelectedModifier] =
    useState<BatangaWheelData | null>(null);
  const [selectedRestriction, setSelectedRestriction] =
    useState<BatangaWheelData | null>(null);

  const handleModifierSelected = (result: string) => {
    const winner: BatangaWheelData = modifiers.find(
      (modifier) => modifier.name === result
    )!;
    setSelectedModifier(winner);
  };
  const handleRestrictionSelected = (result: string) => {
    const winner: BatangaWheelData = restrictions.find(
      (restriction) => restriction.name === result
    )!;
    setSelectedRestriction(winner);
  };

  return (
    <div
      className="text-base-content h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage: `url(${barBackground})`,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
      {/* Restrizioni */}
        <div className="card col-span-2 bg-base-200 shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-center">Restrizioni</h2>
          {
            <BatangaWheel
              items={restrictionWheelOptions}
              onResult={handleRestrictionSelected}
            />
          }
          {selectedRestriction && <h2>{selectedRestriction.name}</h2>}
        </div>

        {/* Modificatori */}
        <div className="card col-span-2 bg-base-200 shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-center">Modificatori</h2>
          <BatangaWheel
            items={modifierWheelOptions}
            onResult={handleModifierSelected}
          />
          {selectedModifier && <h2>{selectedModifier.name}</h2>}
        </div>

        {/* Tabella con info */}
        <div className="col-span-2 w-full h-full">
          <BatangaTable />
        </div>
      </div>
    </div>
  );
}

export default Play;
