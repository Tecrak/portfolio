export type NavItem = {
  label: string;
  desc: string;
  path?: string;
  forDB: string;
  disabled?: boolean;
  led: string;
};

export const EXAMPLELINKS: NavItem[] = [
  {
    label: "Simple example",
    desc: "P",
    forDB: "PostgreSimple",
    path: "/page/examples/postgresql",
    led: "lime",
  },
  {
    label: "Image share",
    desc: "M",
    forDB: "MongoImages",
    path: "/page/examples/mongodb",
    led: "lime",
  },
  {
    label: "?????",
    desc: "My",
    forDB: "MySQLSmthng",
    path: "/page/examples/mysql",
    led: "red",
  },
  {
    label: "NestJS",
    desc: "dasdasdad3",
    // path: "/page/examples/mysql",
    disabled: true,
    forDB: "??",
    led: "grey",
  },
  {
    label: "Express",
    desc: "dasdasdad3",
    // path: "/page/examples/mysql",
    disabled: true,
    forDB: "??",
    led: "grey",
  },
];
