"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function useProjectShowcase() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [viewMode, setViewMode] = useState("list");
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef(null);
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const moverRefs = useRef({
    xMoveContainer: null,
    yMoveContainer: null,
    xMoveCursor: null,
    yMoveCursor: null,
    xMoveCursorLabel: null,
    yMoveCursorLabel: null,
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return () => {};
    }

    const handleBreakpoint = () => {
      if (window.innerWidth <= 768) {
        setViewMode("grid");
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleBreakpoint();
    window.addEventListener("resize", handleBreakpoint);

    return () => window.removeEventListener("resize", handleBreakpoint);
  }, []);

  useEffect(() => {
    if (
      isMobile ||
      !modalContainer.current ||
      !cursor.current ||
      !cursorLabel.current ||
      typeof window === "undefined"
    ) {
      return;
    }

    moverRefs.current.xMoveContainer = gsap.quickTo(
      modalContainer.current,
      "left",
      {
        duration: 0.8,
        ease: "power3",
      }
    );
    moverRefs.current.yMoveContainer = gsap.quickTo(
      modalContainer.current,
      "top",
      {
        duration: 0.8,
        ease: "power3",
      }
    );
    moverRefs.current.xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    moverRefs.current.yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    moverRefs.current.xMoveCursorLabel = gsap.quickTo(
      cursorLabel.current,
      "left",
      {
        duration: 0.45,
        ease: "power3",
      }
    );
    moverRefs.current.yMoveCursorLabel = gsap.quickTo(
      cursorLabel.current,
      "top",
      {
        duration: 0.45,
        ease: "power3",
      }
    );

    return () => {
      moverRefs.current = {
        xMoveContainer: null,
        yMoveContainer: null,
        xMoveCursor: null,
        yMoveCursor: null,
        xMoveCursorLabel: null,
        yMoveCursorLabel: null,
      };
    };
  }, [isMobile]);

  const moveItems = (mouseX, mouseY) => {
    const {
      xMoveContainer,
      yMoveContainer,
      xMoveCursor,
      yMoveCursor,
      xMoveCursorLabel,
      yMoveCursorLabel,
    } = moverRefs.current;

    if (
      !xMoveContainer ||
      !yMoveContainer ||
      !xMoveCursor ||
      !yMoveCursor ||
      !xMoveCursorLabel ||
      !yMoveCursorLabel
    ) {
      return;
    }

    xMoveContainer(mouseX);
    yMoveContainer(mouseY);
    xMoveCursor(mouseX);
    yMoveCursor(mouseY);
    xMoveCursorLabel(mouseX);
    yMoveCursorLabel(mouseY);
  };

  const handleMouseMove = (event) => {
    if (isMobile) return;
    moveItems(event.clientX, event.clientY);
  };

  const manageModal = (newActive, newIndex, mouseX, mouseY) => {
    if (isMobile) return;
    moveItems(mouseX, mouseY);
    setModal({ active: newActive, index: newIndex });
  };

  return {
    modal,
    setModal,
    viewMode,
    setViewMode,
    isMobile,
    containerRef,
    modalContainer,
    cursor,
    cursorLabel,
    handleMouseMove,
    manageModal,
  };
}
