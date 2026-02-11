import { HomeClient } from "./component/home/HomeClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div className="main">
      <HomeClient />
    </div>
  );
}
