export default function ExpMainArea({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mainArea">
      <div className="pathText">
        <h4>Skills /</h4>
      </div>
      <div className="exmplDesc">
        <p>ddsdfdsfsdfsdfsdfsdfsdfsdf</p>
      </div>
      <div className="testAreaBlock">
        <p>TEST AREA</p>
        <div className="testArea">{children}</div>
      </div>
    </div>
  );
}
