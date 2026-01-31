"use client";

import { useEffect, useRef, useContext } from "react";
import { cn } from "@/lib/utils";
import { ThemeContext } from "@/contexts/ThemeContext";
export interface BokehBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  /** Number of bokeh orbs */
  count?: number;
  /** Minimum orb size in pixels */
  minSize?: number;
  /** Maximum orb size in pixels */
  maxSize?: number;
  /** Movement speed multiplier */
  speed?: number;
  /** Colors for orbs */
  colors?: string[];
}

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  pulseOffset: number;
  pulseSpeed: number;
}

const DEFAULT_COLORS = [
  "rgba(255, 200, 120, 0.3)",
  "rgba(255, 180, 100, 0.25)",
  "rgba(255, 220, 150, 0.2)",
  "rgba(255, 160, 80, 0.25)",
  "rgba(255, 240, 200, 0.2)",
];

const LIGHT_MODE_COLORS_INDIGO = [
  "rgba(55, 65, 81, 0.3)", // Gray-700
  "rgba(75, 85, 99, 0.25)", // Gray-600
  "rgba(31, 41, 55, 0.3)", // Gray-800
  "rgba(17, 24, 39, 0.25)", // Gray-900
  "rgba(107, 114, 128, 0.25)", // Gray-500
];

export function BokehBackground({
  className,
  children,
  count = 50,
  minSize = 50,
  maxSize = 200,
  speed = 1,
  colors = DEFAULT_COLORS,
}: BokehBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useContext(ThemeContext);

  const defaultColors = isDarkMode ? colors : LIGHT_MODE_COLORS_INDIGO;
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    let width = rect.width;
    let height = rect.height;
    canvas.width = width;
    canvas.height = height;

    let animationId: number;
    let tick = 0;

    // Create orbs
    const createOrb = (): Orb => {
      const size = minSize + Math.random() * (maxSize - minSize);
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3 * speed,
        vy: (Math.random() - 0.5) * 0.3 * speed,
        size,
        color: defaultColors[Math.floor(Math.random() * defaultColors.length)],
        opacity: 0.15 + Math.random() * 0.2,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.005 + Math.random() * 0.01,
      };
    };

    const orbs: Orb[] = Array.from({ length: count }, createOrb);

    // Sort by size for depth (smaller = further back, draw first)
    orbs.sort((a, b) => a.size - b.size);

    // Resize handler
    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const oldWidth = width;
      const oldHeight = height;
      const newWidth = rect.width;
      const newHeight = rect.height;

      // Only update if size actually changed
      if (newWidth !== oldWidth || newHeight !== oldHeight) {
        width = newWidth;
        height = newHeight;
        canvas.width = width;
        canvas.height = height;

        // Proportionally reposition orbs based on the new dimensions
        const widthRatio = newWidth / oldWidth;
        const heightRatio = newHeight / oldHeight;

        for (const orb of orbs) {
          orb.x = orb.x * widthRatio;
          orb.y = orb.y * heightRatio;
        }
      }
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    // Animation
    const animate = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      for (const orb of orbs) {
        // Gentle movement
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Soft bounce at edges
        if (orb.x < -orb.size / 2) orb.x = width + orb.size / 2;
        if (orb.x > width + orb.size / 2) orb.x = -orb.size / 2;
        if (orb.y < -orb.size / 2) orb.y = height + orb.size / 2;
        if (orb.y > height + orb.size / 2) orb.y = -orb.size / 2;

        // Subtle pulse
        const pulse =
          Math.sin(tick * orb.pulseSpeed + orb.pulseOffset) * 0.1 + 1;
        const currentSize = orb.size * pulse;

        // Draw soft bokeh circle
        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          currentSize / 2,
        );

        // Parse color and adjust for gradient
        gradient.addColorStop(
          0,
          orb.color.replace(/[\d.]+\)$/, `${orb.opacity * 1.2})`),
        );
        gradient.addColorStop(
          0.4,
          orb.color.replace(/[\d.]+\)$/, `${orb.opacity})`),
        );
        gradient.addColorStop(
          0.7,
          orb.color.replace(/[\d.]+\)$/, `${orb.opacity * 0.5})`),
        );
        gradient.addColorStop(1, orb.color.replace(/[\d.]+\)$/, "0)"));

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, currentSize / 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Subtle rim highlight
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, currentSize / 2 - 2, 0, Math.PI * 2);
        ctx.strokeStyle = orb.color.replace(
          /[\d.]+\)$/,
          `${orb.opacity * 0.3})`,
        );
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, [count, minSize, maxSize, speed, defaultColors]);

  return (
    <div
      ref={containerRef}
      className={cn("fixed inset-0 overflow-hidden transition-all", className)}
      style={{
        background: isDarkMode
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0a0f1e 100%)" // Dark blue gradient
          : "linear-gradient(135deg, #fff5eb 0%, #ffe4cc 50%, #fff0db 100%)", // Warm peachy-cream gradient
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Subtle overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background: isDarkMode
            ? "radial-gradient(ellipse at 30% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)" // Blue glow for dark mode
            : "radial-gradient(ellipse at 30% 30%, rgba(255, 180, 100, 0.25) 0%, transparent 50%)", // Warm orange glow for light mode
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: isDarkMode
            ? "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(15, 23, 42, 0.8) 100%)" // Dark blue vignette
            : "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(255, 220, 150, 0.3) 100%)", // Light golden vignette
        }}
      />

      {/* Content layer */}
      {children && (
        <div className="relative z-10 h-full w-full">{children}</div>
      )}
    </div>
  );
}

export default function BokehBackgroundDisplay() {
  return <BokehBackground />;
}
