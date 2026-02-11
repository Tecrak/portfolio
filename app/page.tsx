import { HomeClient } from "./HomeClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div className="main">
      <HomeClient />
    </div>
  );
}
