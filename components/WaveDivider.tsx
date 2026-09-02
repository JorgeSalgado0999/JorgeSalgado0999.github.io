type WaveDividerProps = {
  flip?: boolean;
  className?: string;
};

export function WaveDivider({ flip = false, className = "" }: WaveDividerProps) {
  return (
    <div
      className={`pointer-events-none -mb-px w-full overflow-hidden leading-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-16 w-full text-surface md:h-24"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
