"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface TrueFocusProps {
  sentence?: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
  wordClassName?: string;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function TrueFocus({
  sentence = "True Focus",
  separator = " ",
  manualMode = false,
  blurAmount = 2,
  borderColor = "#8fc8d5",
  glowColor = "rgba(143, 200, 213, 0.45)",
  animationDuration = 0.45,
  pauseBetweenAnimations = 1.1,
  className = "",
  wordClassName = "",
}: TrueFocusProps) {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (manualMode || words.length <= 1) return;

    const interval = window.setInterval(
      () => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      },
      (animationDuration + pauseBetweenAnimations) * 1000,
    );

    return () => window.clearInterval(interval);
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex < 0) return;

    const container = containerRef.current;
    const activeWord = wordRefs.current[currentIndex];
    if (!container || !activeWord) return;

    const parentRect = container.getBoundingClientRect();
    const activeRect = activeWord.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (!manualMode) return;
    setLastActiveIndex(index);
    setCurrentIndex(index);
  };

  const handleMouseLeave = () => {
    if (!manualMode || lastActiveIndex === null) return;
    setCurrentIndex(lastActiveIndex);
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-start gap-0 ${className}`}
      style={{ outline: "none", userSelect: "none" }}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;

        return (
          <span
            key={`${word}-${index}`}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className={`relative cursor-default ${wordClassName}`}
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
              outline: "none",
              userSelect: "none",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="pointer-events-none absolute left-0 top-0 box-border"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{ duration: animationDuration }}
      >
        <span
          className="absolute -left-1.25 -top-1.25 h-2.5 w-2.5 rounded-xs border-2 border-b-0 border-r-0"
          style={{
            borderColor,
            filter: `drop-shadow(0 0 3px ${glowColor})`,
          }}
        />
        <span
          className="absolute -right-1.25 -top-1.25 h-2.5 w-2.5 rounded-xs border-2 border-b-0 border-l-0"
          style={{
            borderColor,
            filter: `drop-shadow(0 0 3px ${glowColor})`,
          }}
        />
        <span
          className="absolute -bottom-1.25 -left-1.25 h-2.5 w-2.5 rounded-xs border-2 border-r-0 border-t-0"
          style={{
            borderColor,
            filter: `drop-shadow(0 0 3px ${glowColor})`,
          }}
        />
        <span
          className="absolute -bottom-1.25 -right-1.25 h-2.5 w-2.5 rounded-xs border-2 border-l-0 border-t-0"
          style={{
            borderColor,
            filter: `drop-shadow(0 0 3px ${glowColor})`,
          }}
        />
      </motion.div>
    </div>
  );
}
