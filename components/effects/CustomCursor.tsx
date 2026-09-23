"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsVisible(true);

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const render = () => {
      const size = cursor.dataset.hovered === "true" ? 80 : 12;
      const offset = size / 2;
      cursor.style.transform = `translate3d(${mouseX - offset}px, ${mouseY - offset}px, 0)`;
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const hoverable = target?.closest("[data-cursor]") as HTMLElement | null;
      
      if (hoverable) {
        setCursorText(hoverable.getAttribute("data-cursor") || "");
        setIsHovered(true);
        if (cursorRef.current) cursorRef.current.dataset.hovered = "true";
      } else {
        setCursorText("");
        setIsHovered(false);
        if (cursorRef.current) cursorRef.current.dataset.hovered = "false";
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      data-hovered={isHovered}
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full bg-emerald-400 text-black text-[10px] font-mono tracking-widest font-bold shadow-[0_0_20px_rgba(16,185,129,0.5)] uppercase transition-[width,height] duration-150 ease-out"
      style={{
        width: "12px",
        height: "12px",
        transform: "translate3d(-100px, -100px, 0)",
      }}
    >
      {isHovered && <span className="p-1 text-center leading-none">{cursorText}</span>}
    </div>
  );
}