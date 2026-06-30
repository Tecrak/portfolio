export type NavItem = {
  label: string;
  path?: string;
  forDB: string;
  disabled?: boolean;
  led: string;
};

export const EXAMPLELINKS: NavItem[] = [
  {
    label: "Simple example",
    forDB: "PostgreSimple",
    path: "/page/examples/postgresimple",
    led: "lime",
  },
  {
    label: "Image share",
    forDB: "MongoImages",
    path: "/page/examples/mongoimages",
    led: "lime",
  },
  {
    label: "Shop",
    forDB: "MongoShop",
    path: "/page/examples/mongoShop",
    led: "orange",
  },
  {
    label: "NestJS",
    // path: "/page/examples/mysql",
    disabled: true,
    forDB: "??",
    led: "grey",
  },
  {
    label: "Express",
    // path: "/page/examples/mysql",
    disabled: true,
    forDB: "??",
    led: "grey",
  },
];
