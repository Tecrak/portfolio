export type NavItem = {
  label: string;
  path: string;
  led: string;
};

export const EXAMPLELINKS: NavItem[] = [
  {
    label: "PostgreSQL",
    path: "/page/examples/postgresql",
    led: "lime",
  },
  {
    label: "MongoDB",
    path: "/page/examples/mongodb",
    led: "red",
  },
  {
    label: "MySQL",
    path: "/page/examples/mysql",
    led: "red",
  },
];
