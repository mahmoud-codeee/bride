import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { t, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`${t.meta.fontBody} fixed top-4 end-4 z-50 rounded-full px-4 py-2 text-sm sm:text-base shadow-md transition-transform hover:scale-105`}
      style={{
        backgroundColor: "var(--color-wine)",
        color: "var(--color-ivory)",
      }}
    >
      {t.languageToggle.label}
    </button>
  );
}
