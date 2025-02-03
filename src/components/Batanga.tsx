import { motion } from "framer-motion";
import { useState } from "react";
import batanga from "../img/batanga.webp";

const Batanga = () => {
  const [clicks, setClicks] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [isFallen, setIsFallen] = useState(false);

  const handleShake = () => {
    if (isFallen) {
      setIsFallen(false);
      setClicks(0);
    } else if (clicks < 9) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setClicks((prev) => prev + 1);
    } else {
      setIsFallen(true);
    }
  };

  return (
    <motion.div
      onClick={handleShake}
      animate={{
        x: isShaking ? [0, -10, 10, -8, 8, -4, 4, 0] : 0,
        rotate: isFallen ? -90 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        display: "inline-block",
        cursor: "pointer",
        transformOrigin: "bottom left",
      }}
    >
      <img src={batanga} alt="Batanga" />
    </motion.div>
  );
};

export default Batanga;
