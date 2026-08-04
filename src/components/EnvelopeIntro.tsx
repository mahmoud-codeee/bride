import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Monogram from "./Monogram";
import { playEnvelopeSound } from "../utils/sound";

type Stage = "idle" | "anticipation" | "seal" | "flap" | "burst" | "clear";

const SPARKLE_COUNT = 16;
const burstSparkles = Array.from({ length: SPARKLE_COUNT }, (_, i) => {
  const angle = (i / SPARKLE_COUNT) * Math.PI * 2 + (i % 2 === 0 ? 0.12 : -0.1);
  const distance = 60 + ((i * 29) % 55);
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance * 0.7 - 12,
    delay: ((i * 7) % 6) / 100,
    size: 4 + ((i * 5) % 5),
  };
});

const OVERSHOOT_EASE = [0.34, 1.56, 0.64, 1] as const;

function SpeakerIcon({ muted }: { muted: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      {muted ? (
        <path d="M16 9l4.5 6M20.5 9 16 15" />
      ) : (
        <path d="M16.5 8.5a4.5 4.5 0 0 1 0 7" />
      )}
    </svg>
  );
}

interface EnvelopeIntroProps {
  onOpen: () => void;
}

export default function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [stage, setStage] = useState<Stage>("idle");
  const [entered, setEntered] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [muted, setMuted] = useState(
    () => localStorage.getItem("envelope-muted") === "true",
  );
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    const locked = mounted && stage !== "clear";
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted, stage]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const schedule = (fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timeoutsRef.current.push(id);
  };

  const toggleMute = () => {
    setMuted((prev) => {
      const next = !prev;
      localStorage.setItem("envelope-muted", String(next));
      return next;
    });
  };

  const handleOpen = () => {
    if (stage !== "idle") return;

    if (prefersReducedMotion) {
      if (!muted) playEnvelopeSound();
      setStage("clear");
      onOpen();
      schedule(() => setMounted(false), 320);
      return;
    }

    setStage("anticipation");
    schedule(() => setStage("seal"), 140);
    schedule(() => setStage("flap"), 220);
    schedule(() => {
      setStage("burst");
      if (!muted) playEnvelopeSound();
    }, 860);
    schedule(() => {
      setStage("clear");
      onOpen();
    }, 1200);
    schedule(() => setMounted(false), 1800);
  };

  if (!mounted) return null;

  const isOpenish = stage === "flap" || stage === "burst" || stage === "clear";
  const isSealGone = stage === "seal" || isOpenish;
  const isCleared = stage === "clear";
  const showBurst = !prefersReducedMotion && (stage === "burst" || stage === "clear");

  const envelopeAnimate = prefersReducedMotion
    ? { opacity: isCleared ? 0 : 1, scale: 1, y: 0 }
    : stage === "idle"
      ? entered
        ? { opacity: 1, scale: [1, 1.02, 1], y: [0, -6, 0] }
        : { opacity: 1, scale: 1, y: 0 }
      : stage === "anticipation"
        ? { opacity: 1, scale: 0.96, y: 0 }
        : isCleared
          ? { opacity: 0, scale: 0.82, y: 0 }
          : { opacity: 1, scale: 1, y: 0 };

  const envelopeTransition = prefersReducedMotion
    ? { duration: 0.3 }
    : stage === "idle"
      ? entered
        ? { duration: 3.4, repeat: Infinity, ease: "easeInOut" as const }
        : { duration: 0.9, ease: "easeOut" as const }
      : stage === "anticipation"
        ? { duration: 0.13, ease: "easeIn" as const }
        : isCleared
          ? { duration: 0.55, ease: "easeInOut" as const }
          : { duration: 0.25, ease: "easeOut" as const };

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-6"
      style={{ pointerEvents: isCleared ? "none" : "auto" }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--color-ivory)" }}
        animate={{ opacity: isCleared ? 0 : 1 }}
        transition={{ duration: prefersReducedMotion ? 0.3 : 0.55, ease: "easeInOut" }}
      />

      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute" : "Mute"}
        className="absolute top-4 start-4 z-10 rounded-full p-2 transition-transform hover:scale-105"
        style={{
          color: "var(--color-gold-deep)",
          border: "1px solid var(--color-gold-light)",
          backgroundColor: "var(--color-ivory-dark)",
          opacity: isCleared ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        <SpeakerIcon muted={muted} />
      </button>

      <button
        type="button"
        onClick={handleOpen}
        disabled={stage !== "idle"}
        aria-label={t.envelope.invite}
        className="relative z-10 flex flex-col items-center gap-7 focus:outline-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={envelopeAnimate}
          transition={envelopeTransition}
          onAnimationComplete={() => {
            if (stage === "idle" && !entered) setEntered(true);
          }}
          style={{ perspective: 900 }}
        >
          <div
            className="relative w-64 h-44 sm:w-80 sm:h-56 rounded-lg overflow-visible"
            style={{
              backgroundColor: "var(--color-ivory-dark)",
              border: "1.5px solid var(--color-gold)",
            }}
          >
            <svg
              viewBox="0 0 300 200"
              className="absolute inset-0 w-full h-full"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M8 192 L150 112 L292 192"
                stroke="var(--color-gold)"
                strokeWidth="1"
                opacity="0.5"
              />
            </svg>

            {showBurst && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 35%, #fffdf5 0%, var(--color-gold-light) 35%, transparent 70%)",
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1.9, 2.3] }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 pointer-events-none overflow-visible">
                  {burstSparkles.map((s, i) => (
                    <motion.span
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        left: "50%",
                        top: "38%",
                        width: s.size,
                        height: s.size,
                        backgroundColor: "var(--color-gold)",
                      }}
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{ x: s.x, y: s.y, opacity: [0, 1, 0] }}
                      transition={{ duration: 0.7, delay: s.delay, ease: "easeOut" }}
                    />
                  ))}
                </div>
              </>
            )}

            <motion.div
              className="absolute top-0 left-0 w-full origin-top"
              style={{ height: "58%", transformStyle: "preserve-3d" }}
              animate={{ rotateX: prefersReducedMotion ? 0 : isOpenish ? -172 : 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0.2 }
                  : { duration: 0.62, ease: OVERSHOOT_EASE }
              }
            >
              <svg
                viewBox="0 0 300 115"
                className="w-full h-full"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M6 4 L150 100 L294 4"
                  fill="var(--color-blush-light)"
                  stroke="var(--color-gold)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>

              <motion.div
                className="absolute"
                style={{
                  top: "70%",
                  left: "50%",
                  width: 52,
                  height: 52,
                  marginLeft: -26,
                  marginTop: -26,
                }}
                animate={
                  prefersReducedMotion
                    ? { scale: 1, opacity: 1, rotate: 0 }
                    : isSealGone
                      ? { scale: 0, opacity: 0, rotate: 22 }
                      : { scale: 1, opacity: 1, rotate: 0 }
                }
                transition={{ duration: 0.28, ease: "easeIn" }}
              >
                <Monogram className="w-full h-full" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.span
          className={`${t.meta.fontHeading} text-lg sm:text-xl`}
          style={{ color: "var(--color-wine)" }}
          animate={{ opacity: isCleared ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {t.envelope.invite}
        </motion.span>
      </button>

      {!prefersReducedMotion && (stage === "burst" || stage === "clear") && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "#fffaf0" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.55, 0] }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      )}
    </div>
  );
}
