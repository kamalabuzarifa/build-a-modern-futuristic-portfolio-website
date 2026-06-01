import { type ReactNode, useRef } from "react";

interface InteractiveTiltProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  maxTilt?: number;
  hoverScale?: number;
}

export function InteractiveTilt({
  children,
  className = "",
  innerClassName = "",
  maxTilt = 9,
  hoverScale = 1.02
}: InteractiveTiltProps) {
  const innerRef = useRef<HTMLDivElement>(null);

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const inner = innerRef.current;
    if (!inner) return;

    const rect = inner.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - y) * maxTilt * 2;

    inner.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${hoverScale})`;
    inner.style.setProperty("--glare-x", `${(x * 100).toFixed(2)}%`);
    inner.style.setProperty("--glare-y", `${(y * 100).toFixed(2)}%`);
  };

  const onLeave = () => {
    const inner = innerRef.current;
    if (!inner) return;
    inner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    inner.style.setProperty("--glare-x", "50%");
    inner.style.setProperty("--glare-y", "50%");
  };

  return (
    <div
      className={`group [perspective:1200px] ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        ref={innerRef}
        className={`relative transition-transform duration-300 ease-out will-change-transform ${innerClassName}`}
        style={{ transform: "rotateX(0deg) rotateY(0deg) scale(1)" }}
      >
        {children}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(220px circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(0,234,255,0.16), transparent 55%)"
          }}
        />
      </div>
    </div>
  );
}
