"use client";
import { useState, useRef, useEffect } from "react";
import "../styles/page.css";

export default function BlockToClose({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState<string>("0px");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      // після рендеру знаємо реальну висоту
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  useEffect(() => {
    // встановлюємо початкову висоту після монтування
    if (ref.current) {
      setHeight(`${ref.current.scrollHeight}px`);
    }
  }, []);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`experiment ${isOpen ? "" : "closed"}`}
      ></div>
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
