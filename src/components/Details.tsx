import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

function DetailCard({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="flex flex-col items-center gap-3 rounded-2xl px-8 py-10 w-full sm:w-64 shadow-sm"
      style={{
        backgroundColor: "var(--color-ivory-dark)",
        border: "1px solid var(--color-gold-light)",
      }}
    >
      <span
        className={`${t.meta.fontHeading} text-sm sm:text-base tracking-widest`}
        style={{ color: "var(--color-gold)" }}
      >
        {label}
      </span>
      <span
        className={`${t.meta.fontBody} text-lg sm:text-xl text-center leading-snug whitespace-pre-line`}
        style={{ color: "var(--color-wine-dark)" }}
      >
        {value}
      </span>
    </motion.div>
  );
}

export default function Details() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 flex flex-col items-center gap-12">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`${t.meta.fontHeading} text-2xl sm:text-3xl`}
        style={{ color: "var(--color-wine-dark)" }}
      >
        {t.details.title}
      </motion.h2>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
        <DetailCard
          label={t.details.date.label}
          value={t.details.date.value}
          delay={0.1}
        />
        <DetailCard
          label={t.details.time.label}
          value={t.details.time.value}
          delay={0.2}
        />
        <DetailCard
          label={t.details.location.label}
          value={t.details.location.value}
          delay={0.3}
        />
      </div>
    </section>
  );
}
