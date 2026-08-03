import { motion, useReducedMotion } from "framer-motion";

interface PetalConfig {
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotate: number;
  color: string;
}

const PETAL_COUNT = 10;
const PETAL_COLORS = [
  "var(--color-blush)",
  "var(--color-blush-light)",
  "var(--color-gold-light)",
];

const petals: PetalConfig[] = Array.from({ length: PETAL_COUNT }, (_, i) => ({
  left: (i / PETAL_COUNT) * 100 + (Math.random() * 6 - 3),
  size: 10 + Math.random() * 8,
  duration: 16 + Math.random() * 10,
  delay: Math.random() * 12,
  drift: Math.random() * 40 - 20,
  rotate: Math.random() * 360,
  color: PETAL_COLORS[i % PETAL_COLORS.length],
}));

export default function Petals() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {petals.map((petal, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${petal.left}%`, top: "-5vh", width: petal.size }}
          initial={{ y: 0, x: 0, rotate: petal.rotate, opacity: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, petal.drift, 0],
            rotate: [petal.rotate, petal.rotate + 180, petal.rotate + 360],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
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
