interface MonogramProps {
  className?: string;
}

export default function Monogram({ className = "" }: MonogramProps) {
  return (
    <svg
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="130" cy="130" r="96" stroke="var(--color-gold)" strokeWidth="1.5" />
      <circle
        cx="130"
        cy="130"
        r="88"
        stroke="var(--color-gold)"
        strokeWidth="0.75"
        opacity="0.5"
      />

      <text
        x="103"
        y="148"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="108"
        fill="var(--color-gold)"
        style={{ fontFamily: "'Aref Ruqaa', serif" }}
      >
        م
      </text>
      <text
        x="162"
        y="148"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="108"
        fill="var(--color-gold)"
        opacity="0.92"
        style={{ fontFamily: "'Aref Ruqaa', serif" }}
      >
        غ
      </text>

      <path
        d="M132,113 C132,109 127,109 127,112.5 C127,116 130,118 132,121 C134,118 137,116 137,112.5 C137,109 132,109 132,113 Z"
        stroke="var(--color-blush)"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
