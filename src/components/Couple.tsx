import { motion } from "framer-motion";
import FloralOrnament from "./FloralOrnament";
import photo3 from "../assets/photo3.jpg";

export default function Couple() {
  return (
    <section className="py-20 px-6 flex flex-col items-center gap-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
      >
        <FloralOrnament className="absolute -top-3 -start-3 w-20 h-20 sm:w-28 sm:h-28 opacity-70" />
        <FloralOrnament
          className="absolute -top-3 -end-3 w-20 h-20 sm:w-28 sm:h-28 opacity-70"
          flip
        />
        <FloralOrnament className="absolute -bottom-3 -start-3 w-20 h-20 sm:w-28 sm:h-28 opacity-70" />
        <FloralOrnament
          className="absolute -bottom-3 -end-3 w-20 h-20 sm:w-28 sm:h-28 opacity-70"
          flip
        />

        <svg
          viewBox="0 0 260 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-full h-full"
          aria-hidden="true"
        >
          <circle
            cx="130"
            cy="130"
            r="96"
            stroke="var(--color-gold)"
            strokeWidth="1.5"
          />
          <circle
            cx="130"
            cy="130"
            r="88"
            stroke="var(--color-gold)"
            strokeWidth="0.75"
            opacity="0.5"
          />

          <text
            x="103"
            y="148"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="108"
            fill="var(--color-gold)"
            style={{ fontFamily: "'Aref Ruqaa', serif" }}
          >
            م
          </text>
          <text
            x="162"
            y="148"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="108"
            fill="var(--color-gold)"
            opacity="0.92"
            style={{ fontFamily: "'Aref Ruqaa', serif" }}
          >
            غ
          </text>

          <path
            d="M132,113 C132,109 127,109 127,112.5 C127,116 130,118 132,121 C134,118 137,116 137,112.5 C137,109 132,109 132,113 Z"
            stroke="var(--color-blush)"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full max-w-sm sm:max-w-md rounded-2xl p-1.5"
        style={{ border: "1px solid var(--color-gold-light)" }}
      >
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: "1.5px solid var(--color-gold)" }}
        >
          <img src={photo3} alt="" className="w-full h-auto object-cover" />
        </div>
      </motion.div>
    </section>
  );
}
