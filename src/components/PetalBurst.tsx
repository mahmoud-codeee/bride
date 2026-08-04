import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface PetalBurstProps {
  active: boolean;
}

const BURST_PETAL_COUNT = 26;
const PETAL_COLORS = [
  "var(--color-blush)",
  "var(--color-blush-light)",
  "var(--color-gold-light)",
];

const burstPetals = Array.from({ length: BURST_PETAL_COUNT }, (_, i) => ({
  left: (i / BURST_PETAL_COUNT) * 100 + (((i * 17) % 10) - 5),
  size: 8 + ((i * 11) % 16),
  duration: 1 + ((i * 7) % 6) / 10,
  delay: ((i * 13) % 10) / 20,
  drift: ((i * 23) % 60) - 30,
  rotate: (i * 41) % 360,
  color: PETAL_COLORS[i % PETAL_COLORS.length],
}));

export default function PetalBurst({ active }: PetalBurstProps) {
  const prefersReducedMotion = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!active || prefersReducedMotion) return;
    setShow(true);
    const id = window.setTimeout(() => setShow(false), 1500);
    return () => window.clearTimeout(id);
  }, [active, prefersReducedMotion]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-40"
      aria-hidden="true"
    >
      {burstPetals.map((petal, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${petal.left}%`, top: "-8vh", width: petal.size }}
          initial={{ y: 0, x: 0, rotate: petal.rotate, opacity: 0 }}
          animate={{
            y: ["0vh", "115vh"],
            x: [0, petal.drift],
            rotate: [petal.rotate, petal.rotate + 280],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: petal.duration, delay: petal.delay, ease: "easeIn" }}
        >
          <svg viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0 C 18 8, 18 22, 10 30 C 2 22, 2 8, 10 0 Z"
              fill={petal.color}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
