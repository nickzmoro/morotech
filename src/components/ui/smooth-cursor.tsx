/* eslint-disable react-hooks/purity */
"use client";

import { motion, useSpring } from "motion/react";
import { FC, useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export interface SmoothCursorProps {
  cursor?:
    | React.ReactNode
    | ((isHovered: boolean, isHoveringBlue: boolean) => React.ReactNode);
  springConfig?: {
    damping: number;
    stiffness: number;
    mass: number;
    restDelta: number;
  };
}

const DESKTOP_POINTER_QUERY = "(any-hover: hover) and (any-pointer: fine)";

function isTrackablePointer(pointerType: string) {
  return pointerType !== "touch";
}

const isBlueTarget = (el: HTMLElement | null): boolean => {
  if (!el) return false;
  const interactive = el.closest(
    "a, button, [role='button'], input[type='button'], input[type='submit']",
  );
  if (!interactive) return false;

  // Check class names
  const className = interactive.className || "";
  if (
    className.includes("bg-[#2563EB]") ||
    className.includes("bg-[#2563eb]") ||
    className.includes("bg-blue-") ||
    className.includes("bg-[#001D6E]") ||
    className.includes("bg-[#2564eb]")
  ) {
    return true;
  }

  // Check computed style
  try {
    const style = window.getComputedStyle(interactive);
    const rgbStr = style.backgroundColor || "";
    const match = rgbStr.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
    if (match) {
      const r = parseInt(match[1], 10);
      const g = parseInt(match[2], 10);
      const b = parseInt(match[3], 10);
      return b > 200 && r < 100 && g < 150;
    }
  } catch (e) {
    // Ignore error
  }

  return false;
};

const DefaultCursor: FC<{ isHovered: boolean; isHoveringBlue: boolean }> = ({
  isHovered,
  isHoveringBlue,
}) => {
  return (
    <motion.div
      className="pointer-events-none rounded-full select-none"
      style={{ border: "2px solid rgba(255, 255, 255, 0)" }}
      animate={{
        width: isHovered ? 48 : 8,
        height: isHovered ? 48 : 8,
        backgroundColor: isHovered
          ? isHoveringBlue
            ? "rgba(255, 255, 255, 0)"
            : "rgba(255, 255, 255, 1)"
          : "rgba(255, 255, 255, 1)",
        borderColor:
          isHovered && isHoveringBlue
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0)",
      }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
    />
  );
};

export function SmoothCursor({
  cursor,
  springConfig = {
    damping: 35,
    stiffness: 750,
    mass: 0.3,
    restDelta: 0.001,
  },
}: SmoothCursorProps) {
  const lastMousePos = useRef<Position>({ x: 0, y: 0 });
  const velocity = useRef<Position>({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveringBlue, setIsHoveringBlue] = useState(false);

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const rotation = useSpring(0, {
    ...springConfig,
    damping: 60,
    stiffness: 300,
  });
  const scale = useSpring(1, {
    ...springConfig,
    stiffness: 500,
    damping: 35,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_POINTER_QUERY);

    const updateEnabled = () => {
      const nextIsEnabled = mediaQuery.matches;
      setIsEnabled(nextIsEnabled);

      if (!nextIsEnabled) {
        setIsVisible(false);
      }
    };

    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);

    return () => {
      mediaQuery.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactiveEl = target.closest(
        "a, button, [role='button'], input[type='button'], input[type='submit'], select, label",
      ) as HTMLElement | null;

      const isInteractive =
        !!interactiveEl || window.getComputedStyle(target).cursor === "pointer";

      setIsHovered(isInteractive);
      setIsHoveringBlue(isInteractive && isBlueTarget(target));
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    let timeout: ReturnType<typeof setTimeout> | null = null;

    const updateVelocity = (currentPos: Position) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastUpdateTime.current;

      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        };
      }

      lastUpdateTime.current = currentTime;
      lastMousePos.current = currentPos;
    };

    const smoothPointerMove = (e: PointerEvent) => {
      if (!isTrackablePointer(e.pointerType)) {
        return;
      }

      setIsVisible(true);

      const currentPos = { x: e.clientX, y: e.clientY };
      updateVelocity(currentPos);

      const speed = Math.sqrt(
        Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2),
      );

      cursorX.set(currentPos.x);
      cursorY.set(currentPos.y);

      if (speed > 0.1) {
        const currentAngle =
          Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) +
          90;

        let angleDiff = currentAngle - previousAngle.current;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        accumulatedRotation.current += angleDiff;
        rotation.set(accumulatedRotation.current);
        previousAngle.current = currentAngle;

        if (!isHovered) {
          scale.set(0.95);
        }

        if (timeout !== null) {
          clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
          if (!isHovered) {
            scale.set(1);
          }
        }, 150);
      }
    };

    let rafId = 0;
    const throttledPointerMove = (e: PointerEvent) => {
      if (!isTrackablePointer(e.pointerType)) {
        return;
      }

      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        smoothPointerMove(e);
        rafId = 0;
      });
    };

    document.body.style.cursor = "none";
    window.addEventListener("pointermove", throttledPointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", throttledPointerMove);
      document.body.style.cursor = "auto";
      if (rafId) cancelAnimationFrame(rafId);
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [cursorX, cursorY, rotation, scale, isEnabled, isHovered]);

  if (!isEnabled) {
    return null;
  }

  const isDefaultCursor = cursor === undefined;
  const activeMixBlendMode =
    isHovered && !isHoveringBlue ? "difference" : "normal";

  return (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        rotate: isDefaultCursor ? 0 : rotation,
        scale: scale,
        zIndex: 99999,
        pointerEvents: "none",
        willChange: "transform",
        opacity: isVisible ? 1 : 0,
        mixBlendMode: activeMixBlendMode,
      }}
      initial={false}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{
        duration: 0.15,
      }}
    >
      {cursor ? (
        typeof cursor === "function" ? (
          cursor(isHovered, isHoveringBlue)
        ) : (
          cursor
        )
      ) : (
        <DefaultCursor isHovered={isHovered} isHoveringBlue={isHoveringBlue} />
      )}
    </motion.div>
  );
}
