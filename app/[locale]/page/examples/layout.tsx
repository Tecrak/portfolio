"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { EXAMPLELINKS, ExampleLink } from "@/app/config/examplelinks";
import "./styles/examples.layout.css";

function stripLocale(pathname: string): string {
  return pathname.replace(/^\/[a-z]{2}(-[A-Z]{2})?(?=\/)/, "");
}

function useCurrentLink(links: ExampleLink[]): ExampleLink | undefined {
  const pathname = usePathname();
  const normalized = stripLocale(pathname);
  return links.find((l) => normalized.startsWith(l.path));
}

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("Examples");
  const pathname = usePathname();
  const normalized = stripLocale(pathname);
  const current = useCurrentLink(EXAMPLELINKS);

  const statusClass = `ex-badge--${current?.badgeStatus ?? "stable"}`;
  const isIndex = normalized === "/page/examples";

  const skillT = current
    ? (() => {
        try {
          return {
            infoTitle: t(`skills.${current.path}.infoTitle`),
            infoDesc: t(`skills.${current.path}.infoDesc`),
          };
        } catch {
          return {
            infoTitle: current.infoTitle,
            infoDesc: current.infoDesc,
          };
        }
      })()
    : null;

  return (
    <div className="examples-root">
      {/* ── SIDEBAR ── */}
      <aside className="ex-sidebar">
        <div className="ex-sidebar__header">
          <span className="ex-sidebar__title">{t("sidebarTitle")}</span>
        </div>

        <ul className="ex-sidebar__list">
          {EXAMPLELINKS.map((link) => {
            const isActive = normalized.startsWith(link.path);
            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`ex-nav-item${isActive ? " active" : ""}`}
                >
                  <span className="ex-nav-item__meta">
                    <span className="ex-nav-item__name">{link.label}</span>
                    {link.tag && (
                      <span className="ex-nav-item__tag">{link.tag}</span>
                    )}
                  </span>
                  <span className={`led led--${link.led ?? "gray"}`} />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="ex-sidebar__footer">
          <span className="ex-sidebar__footer-dot" />
          <span className="ex-sidebar__footer-text">{t("footerText")}</span>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main className="ex-main">
        <div className="ex-topbar">
          <div className="ex-breadcrumb">
            <span className="ex-breadcrumb__root">Skills</span>
            <span className="ex-breadcrumb__sep">/</span>
            <span className="ex-breadcrumb__current">
              {current?.label ?? "—"}
              {current?.label}
            </span>
          </div>
          <div className="ex-topbar__badges">
            {current?.badgeType && (
              <span className="ex-badge ex-badge--type">
                {current.badgeType}
              </span>
            )}
            {current?.badgeStatus && (
              <span className={`ex-badge ${statusClass}`}>
                {current.badgeStatus}
              </span>
            )}
          </div>
        </div>

        <div className="ex-content">
          {current && skillT && (
            <div className="ex-info">
              <p className="ex-info__title">{skillT.infoTitle}</p>
              <p className="ex-info__desc">{skillT.infoDesc}</p>
              {current.infoChips && (
                <div className="ex-info__chips">
                  {current.infoChips.map((c) => (
                    <span key={c} className="ex-chip">
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {!isIndex && (
            <div className="ex-test">
              <div className="ex-test__header">
                <span className="ex-test__label">{t("testAreaLabel")}</span>
              </div>
              <div className="ex-test__body">{children}</div>
            </div>
          )}

          {isIndex && (
            <div className="ex-index-hint">
              <span>{t("indexHint")}</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}