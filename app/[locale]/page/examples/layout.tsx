import "./styles/layout.css";
import ExpSideBar from "./components/sideBar";
import ExpMainArea from "./components/mainArea";

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mainBox">
      <ExpSideBar />
      <ExpMainArea children={children} />
    </div>
  );
}
