import { EXAMPLELINKS } from "../config/exampleLinks";

export default function ExpMainArea({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mainArea">
      <div className="pathText">
        {EXAMPLELINKS.map(())}
        <h4>Skills / </h4>
      </div>
      <div className="exmplDesc">
        <p></p>
      </div>
      <div className="testAreaBlock">
        <p>TEST AREA</p>
        <div className="testArea">{children}</div>
      </div>
    </div>
  );
}
