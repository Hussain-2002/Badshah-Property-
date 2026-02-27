import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MAGNETIC_THRESHOLD = 60;
const MAGNETIC_STRENGTH = 0.35;

const AnimatedCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const renderPos = useRef({ x: -100, y: -100 });
  const magnetTarget = useRef<{ cx: number; cy: number } | null>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const rippleId = useRef(0);
  const rafId = useRef<number>(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const getInteractiveElement = (target: HTMLElement): HTMLElement | null => {
    if (target.tagName === "A" || target.tagName === "BUTTON") return target;
    return target.closest("a") || target.closest("button") || target.closest("[role='button']");
  };

  const animate = useCallback(() => {
    let targetX = mousePos.current.x - 16;
    let targetY = mousePos.current.y - 16;

    if (magnetTarget.current) {
      const dx = magnetTarget.current.cx - mousePos.current.x;
      const dy = magnetTarget.current.cy - mousePos.current.y;
      targetX += dx * MAGNETIC_STRENGTH;
      targetY += dy * MAGNETIC_STRENGTH;
    }

    renderPos.current.x = lerp(renderPos.current.x, targetX, 0.15);
    renderPos.current.y = lerp(renderPos.current.y, targetY, 0.15);

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${renderPos.current.x}px, ${renderPos.current.y}px)${hovering ? " scale(1.8)" : ""}`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, [hovering]);

  useEffect(() => {
    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [animate]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Check magnetic proximity
      const target = e.target as HTMLElement;
      const interactive = getInteractiveElement(target);
      if (interactive) {
        const rect = interactive.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
        if (dist < MAGNETIC_THRESHOLD + Math.max(rect.width, rect.height) / 2) {
          magnetTarget.current = { cx, cy };
        } else {
          magnetTarget.current = null;
        }
      } else {
        magnetTarget.current = null;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      if (getInteractiveElement(e.target as HTMLElement)) {
        setHovering(true);
      }
    };

    const onMouseOut = () => {
      setHovering(false);
      magnetTarget.current = null;
    };
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const onMouseDown = () => {
      setClicking(true);
      const id = ++rippleId.current;
      setRipples(prev => [...prev, { id, x: mousePos.current.x, y: mousePos.current.y }]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600);
    };
    const onMouseUp = () => setClicking(false);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [visible]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${hovering ? "hovering" : ""}`}
        style={{ opacity: visible ? 1 : 0 }}
      >
        <span className={`cursor-dot ${clicking ? "active" : ""}`} />
      </div>
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            initial={{ width: 0, height: 0, opacity: 0.5 }}
            animate={{ width: 60, height: 60, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: ripple.x,
              top: ripple.y,
              x: "-50%",
              y: "-50%",
              borderRadius: "50%",
              border: "1.5px solid white",
              pointerEvents: "none",
              zIndex: 9998,
              mixBlendMode: "difference",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default AnimatedCursor;
