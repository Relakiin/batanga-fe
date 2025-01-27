import { useState } from 'react';
import BatangaWheel from '../components/BatangaWheel.tsx';
import { modifiers, restrictions } from '../utils/batangaWheelData.ts';
import { BatangaWheelData } from '../models/BatangaWheelData.ts';
import { mapWheelOptions } from '../utils/batangaWheelDataMapper.ts';
import barBackground from '../img/bg-bar.jpeg';
import '../styles/noScroll.css';
import BatangaTable from '../components/BatangaTable.tsx';

function Play() {
  const modifierWheelOptions = mapWheelOptions(modifiers);
  const restrictionWheelOptions = mapWheelOptions(restrictions);

  const [, setSelectedModifier] =
    useState<BatangaWheelData | null>(null);
  const [, setSelectedRestriction] =
    useState<BatangaWheelData | null>(null);

  const handleModifierSelected = (prizeNumber: number) => {
    const winner: BatangaWheelData = modifiers[prizeNumber];
    setSelectedModifier(winner);
  };
  const handleRestrictionSelected = (prizeNumber: number) => {
    const winner: BatangaWheelData = restrictions[prizeNumber];
    setSelectedRestriction(winner);
  };

  return (
    <div
      className="text-base-content h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage: `url(${barBackground})`,
      }}
    >
      <div className="grid grid-cols-4 gap-4 items-start">
        <div className="card w-auto bg-base-200 shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-center">Restrizioni</h2>
          <BatangaWheel
            wheelData={restrictionWheelOptions}
            onPrizeSelected={handleRestrictionSelected}
          />
        </div>

        <div className="card w-auto bg-base-200 shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-center">Modificatori</h2>
          <BatangaWheel
            wheelData={modifierWheelOptions}
            onPrizeSelected={handleModifierSelected}
          />
        </div>

        <div className="col-span-2 w-full h-full">
          <BatangaTable />
        </div>
      </div>
    </div>
  );
}

export default Play;
