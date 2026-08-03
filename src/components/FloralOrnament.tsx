interface FloralOrnamentProps {
  className?: string;
  flip?: boolean;
}

export default function FloralOrnament({
  className = "",
  flip = false,
}: FloralOrnamentProps) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <path
        d="M10 10 C 40 20, 55 40, 60 70 C 65 100, 85 120, 120 130"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 10 C 25 35, 30 55, 50 75"
        stroke="var(--color-gold)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />

      <g transform="translate(28,22)">
        <circle cx="0" cy="0" r="5" fill="var(--color-blush)" />
        <circle cx="7" cy="4" r="4" fill="var(--color-blush-light)" />
        <circle cx="-6" cy="5" r="3.5" fill="var(--color-blush-light)" />
        <circle cx="0" cy="0" r="2" fill="var(--color-gold)" />
      </g>

      <g transform="translate(48,52)">
        <circle cx="0" cy="0" r="3.5" fill="var(--color-blush-light)" />
        <circle cx="0" cy="0" r="1.4" fill="var(--color-gold)" />
      </g>

      <g transform="translate(78,92)">
        <circle cx="0" cy="0" r="6" fill="var(--color-blush)" />
        <circle cx="8" cy="3" r="4.5" fill="var(--color-blush-light)" />
        <circle cx="-3" cy="8" r="4" fill="var(--color-blush-light)" />
        <circle cx="0" cy="0" r="2.3" fill="var(--color-gold)" />
      </g>

      <path
        d="M60 70 C 66 78, 62 88, 70 96"
        stroke="var(--color-gold)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M100 118 C 108 116, 114 122, 122 120"
        stroke="var(--color-gold)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      <g transform="translate(112,122)">
        <circle cx="0" cy="0" r="3" fill="var(--color-blush-light)" />
        <circle cx="0" cy="0" r="1.2" fill="var(--color-gold)" />
      </g>
    </svg>
  );
}
