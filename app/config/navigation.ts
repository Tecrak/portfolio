export type NavItem = {
  label: string;
  path: string;
};

export const NAVIGATION: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About me", path: "/component/about" },
  { label: "Examples", path: "/component/examples" },
];
