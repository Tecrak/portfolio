export type NavItem = {
  label: string;
  path: string;
};

export const NAVIGATION: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "./component/about" },
];
