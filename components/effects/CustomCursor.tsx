"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const hoverable = target?.closest("[data-cursor]") as HTMLElement | null;
      
      if (hoverable) {
        setCursorText(hoverable.getAttribute("data-cursor") || "");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full bg-emerald-400 text-black text-[10px] font-mono tracking-widest font-bold shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-colors duration-200 uppercase"
      animate={{
        x: mousePosition.x - (isHovered ? 40 : 6),
        y: mousePosition.y - (isHovered ? 40 : 6),
        width: isHovered ? 80 : 12,
        height: isHovered ? 80 : 12,
        opacity: 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.1 }}
    >
      {isHovered && <span className="p-1 text-center leading-none">{cursorText}</span>}
    </motion.div>
  );
}