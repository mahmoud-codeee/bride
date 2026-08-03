import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import {
  buildGoogleCalendarUrl,
  buildIcsContent,
  downloadIcsFile,
} from "../utils/calendar";

export default function AddToCalendar() {
  const { t } = useLanguage();

  const eventData = {
    title: t.calendar.eventTitle,
    description: t.calendar.eventDescription,
    location: t.details.location.value,
  };

  const handleDownloadIcs = () => {
    downloadIcsFile("mohamed-ghada-wedding.ics", buildIcsContent(eventData));
  };

  const googleUrl = buildGoogleCalendarUrl(eventData);

  return (
    <section className="px-6 pb-16 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center gap-4 rounded-2xl px-8 py-8 w-full sm:w-auto sm:max-w-md shadow-sm"
        style={{
          backgroundColor: "var(--color-ivory-dark)",
          border: "1px solid var(--color-gold-light)",
        }}
      >
        <span
          className={`${t.meta.fontHeading} text-sm sm:text-base tracking-widest`}
          style={{ color: "var(--color-gold)" }}
        >
          {t.calendar.title}
        </span>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${t.meta.fontBody} rounded-full px-5 py-2 text-sm sm:text-base text-center shadow-sm transition-transform hover:scale-105`}
            style={{
              backgroundColor: "var(--color-wine)",
              color: "var(--color-ivory)",
            }}
          >
            {t.calendar.googleButton}
          </a>
          <button
            onClick={handleDownloadIcs}
            className={`${t.meta.fontBody} rounded-full px-5 py-2 text-sm sm:text-base transition-transform hover:scale-105`}
            style={{
              backgroundColor: "transparent",
              color: "var(--color-gold-deep)",
              border: "1px solid var(--color-gold-light)",
            }}
          >
            {t.calendar.icsButton}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
