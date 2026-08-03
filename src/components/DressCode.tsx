import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function DressCode() {
  const { t } = useLanguage();

  return (
    <section className="px-6 pb-16 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center gap-3 rounded-2xl px-8 py-8 w-full sm:w-auto sm:max-w-md shadow-sm"
        style={{
          backgroundColor: "var(--color-ivory-dark)",
          border: "1px solid var(--color-gold-light)",
        }}
      >
        <span
          className={`${t.meta.fontHeading} text-sm sm:text-base tracking-widest`}
          style={{ color: "var(--color-gold)" }}
        >
          {t.dressCode.title}
        </span>
        <span
          className={`${t.meta.fontBody} text-base sm:text-lg text-center leading-snug`}
          style={{ color: "var(--color-wine-dark)" }}
        >
          {t.dressCode.note}
        </span>
      </motion.div>
    </section>
  );
}
