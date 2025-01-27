import { Wheel } from 'react-custom-roulette';
import { useState } from 'react';
import { WheelData } from 'react-custom-roulette/dist/components/Wheel/types';

interface BatangaWheelProps {
  wheelData: WheelData[];
  onPrizeSelected: (prizeNumber: number) => void;
}

function BatangaWheel({ wheelData, onPrizeSelected }: BatangaWheelProps) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const backgroundColors = [
    '#cbac08',
    '#e5d604',
    '#bf980b',
    '#e5d604',
  ];

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * wheelData.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={wheelData}
        spinDuration={0.4}
        fontSize={15}
        onStopSpinning={() => {
          setMustSpin(false);
          onPrizeSelected(prizeNumber);
        }}
        backgroundColors={backgroundColors}
      />
      <div>
        <button
          className="btn btn-neutral rounded-full"
          onClick={handleSpinClick}
        >
          SPINNA
        </button>
      </div>
    </div>
  );
}

export default BatangaWheel;
