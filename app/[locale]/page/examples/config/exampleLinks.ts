export type NavItem = {
  label: string;
  desc: string;
  path: string;
  led: string;
};

export const EXAMPLELINKS: NavItem[] = [
  {
    label: "PostgreSQL",
    desc: "dasdasdad1",
    path: "/page/examples/postgresql",
    led: "lime",
  },
  {
    label: "MongoDB",
    desc: "dasdasdad2",
    path: "/page/examples/mongodb",
    led: "red",
  },
  {
    label: "MySQL",
    desc: "dasdasdad3",
    path: "/page/examples/mysql",
    led: "red",
  },
];
