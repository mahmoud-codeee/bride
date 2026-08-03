import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import FloralOrnament from "./FloralOrnament";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative py-16 px-6 flex flex-col items-center gap-6 overflow-hidden">
      <FloralOrnament className="absolute bottom-0 start-1/2 -translate-x-1/2 w-28 h-28 opacity-50 rotate-180" />

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`${t.meta.fontHeading} relative z-10 text-xl sm:text-2xl text-center`}
        style={{ color: "var(--color-wine-dark)" }}
      >
        {t.footer.message}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="relative z-10 text-sm italic tracking-wide"
        style={{ color: "var(--color-gold)" }}
      >
        {t.footer.hashtag}
      </motion.p>
    </footer>
  );
}
