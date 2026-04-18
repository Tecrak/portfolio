"use client";
import { useState, useRef, useEffect } from "react";
import "../styles/page.css";

const openedBlocks = new Set<string>();

export default function BlockToClose({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState<string>("0px");
  const ref = useRef<HTMLDivElement>(null);
  const skipAnimation = useRef(!openedBlocks.has(id));

  useEffect(() => {
    if (!ref.current) return;

    if (skipAnimation.current) {
      openedBlocks.add(id);
      setHeight(`${ref.current.scrollHeight}px`);
      skipAnimation.current = false;
    } else {
      ref.current.style.transition = "none";
      setHeight(`${ref.current.scrollHeight}px`);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.transition = "height 0.4s ease-in-out";
          }
        });
      });
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`experiment ${isOpen ? "" : "closed"}`}
      />
      <div
        ref={ref}
        style={{
          height,
          overflow: "hidden",
          transition: "height 0.4s ease-in-out",
        }}
      >
        {children}
      </div>
    </>
  );
}
