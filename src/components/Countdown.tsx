import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { WEDDING_DATE_ISO } from "../data/content";
import FloralOrnament from "./FloralOrnament";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  arrived: boolean;
}

function getTimeLeft(): TimeLeft {
  const target = new Date(WEDDING_DATE_ISO).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, arrived: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, arrived: false };
}

function CountdownCard({ value, label }: { value: number; label: string }) {
  const padded = value.toString().padStart(2, "0");

  return (
    <div
      className="flex flex-col items-center justify-center rounded-2xl px-4 py-5 sm:px-6 sm:py-7 w-20 sm:w-28 shadow-sm"
      style={{
        backgroundColor: "var(--color-ivory-dark)",
        border: "1px solid var(--color-gold-light)",
      }}
    >
      <div className="h-9 sm:h-12 overflow-hidden relative w-full flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={padded}
            initial={{ y: 16, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -16, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-2xl sm:text-4xl font-semibold tabular-nums"
            style={{ color: "var(--color-wine-dark)" }}
          >
            {padded}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        className="text-xs sm:text-sm mt-2 tracking-wide"
        style={{ color: "var(--color-wine)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-6 flex flex-col items-center gap-10 overflow-hidden">
      <FloralOrnament className="absolute top-2 end-2 w-20 h-20 sm:w-28 sm:h-28 opacity-60" flip />

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`${t.meta.fontHeading} text-2xl sm:text-3xl`}
        style={{ color: "var(--color-wine-dark)" }}
      >
        {t.countdown.title}
      </motion.h2>

      {timeLeft.arrived ? (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`${t.meta.fontHeading} text-xl sm:text-2xl`}
          style={{ color: "var(--color-gold)" }}
        >
          {t.countdown.arrived}
        </motion.p>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="flex gap-3 sm:gap-6"
        >
          <CountdownCard value={timeLeft.days} label={t.countdown.days} />
          <CountdownCard value={timeLeft.hours} label={t.countdown.hours} />
          <CountdownCard value={timeLeft.minutes} label={t.countdown.minutes} />
          <CountdownCard value={timeLeft.seconds} label={t.countdown.seconds} />
        </motion.div>
      )}
    </section>
  );
}
