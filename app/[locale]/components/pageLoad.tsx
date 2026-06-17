"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import "./styles/pageLoad.css";

function stripLocale(pathname: string) {
  return pathname.replace(/^\/(en|ua|de)/, "") || "/";
}

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isLangSwitch, setIsLangSwitch] = useState(false);

  const prevPathRef = useRef<string | null>(null);
  const shownPathsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const currentPath = stripLocale(pathname);
    const langSwitch = prevPathRef.current === currentPath;
    const alreadyShown = shownPathsRef.current.has(currentPath);

    setIsLangSwitch(langSwitch);

    if (prevPathRef.current === null || langSwitch || !alreadyShown) {
      if (langSwitch) {
        setIsLoading(false);
        prevPathRef.current = currentPath;
        return;
      }

      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 150);

      shownPathsRef.current.add(currentPath);
      prevPathRef.current = currentPath;
      return () => clearTimeout(timer);
    }

    prevPathRef.current = currentPath;
    setIsLoading(false);
  }, [pathname]);

  return (
    <>
      {isLoading && (
        <div className="page-loader">
          <div className="loader-bar" />
        </div>
      )}
      <div
        className={`page-content ${isLoading ? "page-hidden" : "page-visible"}`}>
        {children}
      </div>
    </>
  );
}
