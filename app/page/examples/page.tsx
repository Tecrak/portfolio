"use client";
import Link from "next/link";
import { EXAMPLELINKS } from "@/app/config/examplelinks";
import { usePathname } from "next/navigation";

export default function skillPage() {
  const pathname = usePathname();

  return (
    <>
      <div>
        {EXAMPLELINKS.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={pathname == link.path ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
