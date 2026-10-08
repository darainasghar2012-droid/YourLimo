export default function MovingLimo() {
  return (
    <div className="relative w-full h-32 md:h-48 bg-warm-surface overflow-hidden border-y border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
      <div className="limo-track">
        <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="28" width="160" height="18" rx="4" fill="#6B4226" />
          <path d="M30 28 L45 12 L120 12 L140 28 Z" fill="#6B4226" stroke="#C9A27A" strokeWidth="1" />
          <path d="M48 15 L60 27 H45 Z" fill="#8B5E3C" stroke="#C9A27A" strokeWidth="0.5" />
          <path d="M63 15 L100 15 L108 27 H63 Z" fill="#8B5E3C" stroke="#C9A27A" strokeWidth="0.5" />
          <path d="M111 15 L118 27 H105 Z" fill="#8B5E3C" stroke="#C9A27A" strokeWidth="0.5" />
          <rect x="10" y="24" width="160" height="4" fill="#FAF3E8" opacity="0.5" />
          <circle cx="40" cy="48" r="10" fill="#3B2314" stroke="#C9A27A" strokeWidth="2" />
          <circle cx="40" cy="48" r="4" fill="#C9A27A" />
          <circle cx="140" cy="48" r="10" fill="#3B2314" stroke="#C9A27A" strokeWidth="2" />
          <circle cx="140" cy="48" r="4" fill="#C9A27A" />
          <rect x="10" y="44" width="4" height="2" fill="#FAF3E8" opacity="0.6" />
          <rect x="166" y="44" width="4" height="2" fill="#FAF3E8" opacity="0.6" />
          <circle cx="168" cy="34" r="3" fill="#C9A27A" />
          <circle cx="12" cy="34" r="2.5" fill="#ff3b3b" opacity="0.8" />
        </svg>
      </div>

      <style>{`
        .limo-track {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -200px;
          animation: driveAcross 12s linear infinite;
          will-change: transform;
        }
        @keyframes driveAcross {
          0% { left: -200px; opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}