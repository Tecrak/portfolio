"use client";
import { useState, useRef, useEffect } from "react";
import "../styles/page.css";

const closedBlocks = new Set<string>();

export default function BlockToClose({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const [isOpen, setIsOpen] = useState(() => !closedBlocks.has(id));
  const [height, setHeight] = useState<string>("0px");
  const ref = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!ref.current) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;

      if (!isOpen) {
        setHeight("0px");
        return;
      }

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
    if (isFirstRender.current) return;
    if (ref.current) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  const toggle = () => {
    const next = !isOpen;
    if (!next) {
      closedBlocks.add(id);
    } else {
      closedBlocks.delete(id);
    }
    setIsOpen(next);
  };

  return (
    <>
      <div
        onClick={toggle}
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
