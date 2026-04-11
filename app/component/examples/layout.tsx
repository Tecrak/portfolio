"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function exampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  type NavItem = {
    label: string;
    path: string;
  };

  const EXAMPLELINKS: NavItem[] = [
    {
      label: "PostgreSQL",
      path: "/component/examples/postgresql",
    },
    {
      label: "MongoDB",
      path: "/component/examples/mongodb",
    },
    {
      label: "MySQL",
      path: "/component/examples/mysql",
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

      {children}
    </>
  );
}
