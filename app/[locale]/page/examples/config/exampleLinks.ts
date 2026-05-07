export type NavItem = {
  label: string;
  desc?: string;
  path: string;
  led: string;
};

export const EXAMPLELINKS: NavItem[] = [
  {
    label: "PostgreSQL",
    desc: "dasdasdad",
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
