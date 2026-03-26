import SideBar from "./sideBar";

export default function postgreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideBar></SideBar>
      {children}
    </>
  );
}
