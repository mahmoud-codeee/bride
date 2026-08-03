import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import FloralOrnament from "./FloralOrnament";
import photo1 from "../assets/photo1.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yTop = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -80],
  );
  const yBottom = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, 80],
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24"
    >
      <motion.div
        style={{ y: yTop }}
        className="absolute top-4 start-4 w-24 h-24 sm:w-36 sm:h-36 opacity-80"
      >
        <FloralOrnament className="w-full h-full" />
      </motion.div>
      <motion.div
        style={{ y: yBottom }}
        className="absolute bottom-4 end-4 w-24 h-24 sm:w-36 sm:h-36 opacity-80"
      >
        <FloralOrnament className="w-full h-full" flip />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center gap-8"
        initial="hidden"
        animate="visible"
      >
        <motion.p
          custom={0}
          variants={fadeUp}
          className={`${t.meta.fontHeading} text-xl sm:text-2xl font-bold tracking-wide`}
          style={{ color: "var(--color-gold-deep)" }}
        >
          {t.hero.basmala}
        </motion.p>

        <motion.div
          custom={0.15}
          variants={fadeUp}
          className="flex flex-col gap-2"
        >
          {t.hero.verses.map((verse, i) => (
            <p
              key={i}
              className={`${t.meta.fontBody} text-lg sm:text-xl italic`}
              style={{ color: "var(--color-wine)" }}
            >
              {verse}
            </p>
          ))}
        </motion.div>

        <motion.p
          custom={0.3}
          variants={fadeUp}
          className={`${t.meta.fontBody} text-base sm:text-lg leading-relaxed`}
        >
          {t.hero.welcome}
        </motion.p>

        <motion.div
          custom={0.4}
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 sm:gap-x-8"
        >
          <span
            className={`${t.meta.fontHeading} text-lg sm:text-xl`}
            style={{ color: "var(--color-wine)" }}
          >
            {t.hero.father1}
          </span>
          <span
            className={`${t.meta.fontHeading} text-base sm:text-lg`}
            style={{ color: "var(--color-gold)" }}
          >
            {t.hero.fathersDivider}
          </span>
          <span
            className={`${t.meta.fontHeading} text-lg sm:text-xl`}
            style={{ color: "var(--color-wine)" }}
          >
            {t.hero.father2}
          </span>
        </motion.div>

        <motion.p
          custom={0.5}
          variants={fadeUp}
          className={`${t.meta.fontBody} text-base sm:text-lg`}
        >
          {t.hero.invitationLine}
        </motion.p>

        <motion.div
          custom={0.6}
          variants={fadeUp}
          className="w-36 h-36 sm:w-48 sm:h-48 rounded-full p-2"
          style={{ border: "1px solid var(--color-gold-light)" }}
        >
          <div
            className="w-full h-full rounded-full overflow-hidden"
            style={{ border: "2px solid var(--color-gold)" }}
          >
            <img
              src={photo1}
              alt={`${t.hero.groom} & ${t.hero.bride}`}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          custom={0.7}
          variants={fadeUp}
          className="flex items-center justify-center gap-12 sm:gap-24 mt-4"
        >
          <h1
            className={`${t.meta.fontHeading} text-5xl sm:text-7xl`}
            style={{ color: "var(--color-wine-dark)" }}
          >
            {t.hero.groom}
          </h1>
          <span
            className={`${t.meta.fontHeading} text-3xl sm:text-5xl`}
            style={{ color: "var(--color-gold)" }}
          >
            {t.hero.ampersand}
          </span>
          <h1
            className={`${t.meta.fontHeading} text-5xl sm:text-7xl`}
            style={{ color: "var(--color-wine-dark)" }}
          >
            {t.hero.bride}
          </h1>
        </motion.div>
      </motion.div>
    </section>
  );
}
