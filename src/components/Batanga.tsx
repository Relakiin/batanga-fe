import { motion } from 'framer-motion';
import { useState } from 'react';
import batanga from '../img/batanga.png';

const Batanga = () => {
  const [isShaking, setIsShaking] = useState(false);

  const handleShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500); // Reset the animation after it finishes
  };

  return (
    <motion.div
      onClick={handleShake}
      animate={isShaking ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{
        display: 'inline-block',
        cursor: 'pointer',
      }}
    >
      <img src={batanga} className="max-w-sm" />
    </motion.div>
  );
};

export default Batanga;
