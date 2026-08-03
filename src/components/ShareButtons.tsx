import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3.5c-4.7 0-8.5 3.4-8.5 7.5 0 2.1 1 4 2.6 5.4L5 20.5l3.9-1.3c1 .3 2 .5 3.1.5 4.7 0 8.5-3.4 8.5-7.6S16.7 3.5 12 3.5Z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 15 15 9" />
      <path d="M10.5 6.5 11.5 5.5A3.5 3.5 0 0 1 16.5 10.5L15.5 11.5" />
      <path d="M13.5 17.5 12.5 18.5A3.5 3.5 0 0 1 7.5 13.5L8.5 12.5" />
    </svg>
  );
}

export default function ShareButtons() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${t.share.message}\n${pageUrl}`)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable or denied — buttons remain otherwise usable.
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="relative z-10 flex flex-wrap items-center justify-center gap-3"
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${t.meta.fontBody} inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm transition-transform hover:scale-105`}
        style={{ backgroundColor: "var(--color-wine)", color: "var(--color-ivory)" }}
      >
        <ChatIcon />
        {t.share.whatsapp}
      </a>
      <button
        onClick={handleCopy}
        className={`${t.meta.fontBody} inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-transform hover:scale-105`}
        style={{
          backgroundColor: "transparent",
          color: "var(--color-gold-deep)",
          border: "1px solid var(--color-gold-light)",
        }}
      >
        <LinkIcon />
        {copied ? t.share.copied : t.share.copyLink}
      </button>
    </motion.div>
  );
}
