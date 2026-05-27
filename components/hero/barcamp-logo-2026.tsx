export function BarcampLogo2026() {
  return (
    <svg
      viewBox="0 0 200 280"
      width="60%"
      style={{ display: "block", maxHeight: "78%" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="flameG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(70% 0.23 25)" />
          <stop offset="50%" stopColor="oklch(58% 0.23 25)" />
          <stop offset="100%" stopColor="oklch(40% 0.22 25)" />
        </linearGradient>
        <linearGradient id="towerG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdfaf6" />
          <stop offset="100%" stopColor="#d8d2cc" />
        </linearGradient>
      </defs>

      {/* Llama */}
      <g transform="translate(-30, 20)" opacity="0.85">
        <path
          d="M70 220 C 30 200, 20 150, 50 120 C 50 145, 70 145, 65 120 C 90 110, 100 80, 80 50 C 95 70, 120 90, 115 130 C 135 110, 140 90, 130 70 C 155 100, 160 160, 130 200 C 115 220, 90 230, 70 220 Z"
          fill="url(#flameG)"
        />
      </g>

      {/* Torre / monumento geométrico */}
      <g transform="translate(70, 20)" fill="url(#towerG)">
        <rect x="48" y="0" width="4" height="22" />
        <circle cx="50" cy="22" r="6" />
        <rect x="48" y="28" width="4" height="10" />
        <polygon points="38,40 62,40 58,46 42,46" />
        <rect x="42" y="46" width="16" height="50" />
        <polygon points="32,96 68,96 64,102 36,102" />
        <rect x="36" y="102" width="28" height="70" />
        <rect x="42" y="120" width="4" height="40" fill="oklch(20% 0.05 25)" />
        <rect x="48" y="120" width="4" height="40" fill="oklch(20% 0.05 25)" />
        <rect x="54" y="120" width="4" height="40" fill="oklch(20% 0.05 25)" />
        <polygon points="22,172 78,172 74,180 26,180" />
        <rect x="26" y="180" width="48" height="40" />
        <rect x="18" y="220" width="64" height="8" />
        <rect x="10" y="228" width="80" height="10" />
      </g>
    </svg>
  );
}
