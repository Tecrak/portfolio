"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./styles/pageLoad.css";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isLoading && (
        <div className="page-loader">
          <div className="loader-bar" />
        </div>
      )}
      <div
        className={`page-content ${isLoading ? "page-hidden" : "page-visible"}`}
      >
        {children}
      </div>
    </>
  );
}
