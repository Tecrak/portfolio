"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { EXAMPLELINKS, ExampleLink } from "@/app/config/examplelinks";
import "./styles/layout.css";

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mainBox">
      <div className="sideBar">
        <h4>Навчики</h4>
        <ul>
          <li>
            <div className="sideBarText">
              <p>PostgreSQL</p>
            </div>
            <div className="sideBarLed">
              <span></span>
            </div>
          </li>
          <li>
            <div className="sideBarText">
              <p>PostgreSQL</p>
            </div>
            <div className="sideBarLed">
              <span></span>
            </div>
          </li>
          <li>
            <div className="sideBarText">
              <p>PostgreSQL</p>
            </div>
            <div className="sideBarLed">
              <span></span>
            </div>
          </li>
        </ul>
      </div>
      <div className="mainArea">
        <div className="pathText">
          <h4>Skills /</h4>
        </div>
        <div className="exmplDesc">
          <p>ddsdfdsfsdfsdfsdfsdfsdfsdf</p>
        </div>
        <div className="testAreaBlock">
          <p>TEST AREA</p>
          <div className="testArea">{children}</div>
        </div>
      </div>
    </div>
  );
}
