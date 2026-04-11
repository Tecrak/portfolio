import SideBar from "./components/sideBar";

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
