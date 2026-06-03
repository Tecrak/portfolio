"use client";

import { useSession } from "next-auth/react";
import { useMongopeople } from "../../examples/mongodb/api/useMPeople";
import MongoDBPage from "../../examples/mongodb/page";
import styles from "./styles/content.module.css";
import { useState } from "react";
import { EXAMPLELINKS } from "../../examples/config/exampleLinks";

export default function AccountClient({ owner }: { owner: string }) {
  const { data: session } = useSession();
  const [openBlock, setOpenBlock] = useState(0);
  const isOwner = session?.user?.name === owner;
  const Comps: Record<string, React.ReactNode> = {
    MongoDB: <MongoDBPage isAccountPage={true} owner={owner} />,
    PostgreSQL: <div>2</div>,
    MySQL: <div>3</div>,
  };
  const compToLower = (comp: string) => comp.toLowerCase;

  return (
    <div className={styles.mainBlock}>
      <ul className={styles.activityBLock}>
        {EXAMPLELINKS.filter((block) => !block.disabled).map((block, index) => (
          <li className={styles.activityItem}>
            <div
              className={styles.activityContainer}
              onClick={() => setOpenBlock(index)}>
              <p>{block.label} Activity</p>
              <div
                className={styles.testBlock}
                style={
                  openBlock === index
                    ? { top: "51px", opacity: "1", pointerEvents: "all" }
                    : { top: "0px", opacity: "0", pointerEvents: "none" }
                }>
                {Comps[block.label]}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
// {isOwner ? (
//   <h2>Вітаємо, Власник {session?.user?.name}</h2>
// ) : (
//   <h2>Ви переглядаєте пости користувача {owner}</h2>
// )}
// <p>Усі пости {owner}</p>
// <MongoDBPage isAccountPage={true} owner={owner} />
