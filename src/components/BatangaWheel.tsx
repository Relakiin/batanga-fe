import { useState } from 'react';
import { useScreenDetector } from '../hooks/useScreenDetector';
import { Roulette, RouletteItem, useRoulette } from 'react-hook-roulette';
import { deepmerge } from 'deepmerge-ts';

interface BatangaWheelProps {
  items: RouletteItem[];
  onResult: (result: string) => void;
}

const desktopSize = {
  size: 300,
  style: {
    label: {
      font: '12px Verdana',
    },
  },
};

const mobileSize = {
  size: 225,
  style: {
    label: {
      font: '7px Verdana',
    },
  },
};

const defaultOptions = {
  maxSpeed: 20,
  acceleration: 10,
  deceleration: 0.5,
  initialAngle: 0,
  determineAngle: 45,
  showArrow: true,
  style: {
    label: {
      offset: 0.9,
      defaultColor: '#000',
      baseline: 'middle' as CanvasTextBaseline,
    },
    canvas: {
      bg: '#171618',
    },
    arrow: {
      bg: '#000',
      size: 16,
    },
    pie: {
      border: false,
      borderColor: '#000',
      borderWidth: 2,
      theme: [
        {
          bg: '#faab00',
        },
        {
          bg: '#bf8300',
          color: '#fff',
        },
        {
          bg: '#fa8900',
        },
        {
          bg: '#bd6800',
          color: '#fff',
        },
      ],
    },
  },
};

const BatangaWheel = ({ items, onResult }: BatangaWheelProps) => {
  const [spinning, setSpinning] = useState(false);
  const { isMobile } = useScreenDetector();
  const options = isMobile
    ? deepmerge(defaultOptions, mobileSize)
    : deepmerge(defaultOptions, desktopSize);

  const { roulette, onStart, onStop } = useRoulette({
    items,
    onSpinEnd: onResult,
    options,
  });

  const handleSpin = async () => {
    if (spinning) {
      setSpinning(false);
      onStop();
    } else {
      setSpinning(true);
      onStart();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Roulette roulette={roulette} />
      <button className="btn btn-accent" onClick={handleSpin}>
        {spinning ? 'Stop' : 'Gira la ruota'}
      </button>
    </div>
  );
};

export default BatangaWheel;
