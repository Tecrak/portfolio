"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function skillPage() {
  type NavItem = {
    label: string;
    path: string;
  };

  const EXAMPLELINKS: NavItem[] = [
    {
      label: "PostgreSQL",
      path: "/page/examples/postgresql",
    },
    {
      label: "MongoDB",
      path: "/page/examples/mongodb",
    },
    {
      label: "MySQL",
      path: "/page/examples/mysql",
    },
  ];

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
