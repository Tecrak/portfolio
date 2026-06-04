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
    path: "/page/examples/postgresimple",
    led: "lime",
  },
  {
    label: "Image share",
    desc: "M",
    forDB: "MongoImages",
    path: "/page/examples/mongoimages",
    led: "lime",
  },
  {
    label: "?????",
    desc: "My",
    forDB: "MySQLSmthng",
    path: "/page/examples/mysqlsmthng",
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
