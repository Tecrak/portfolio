"use client";

import { useSession } from "next-auth/react";
import { useMongopeople } from "../../examples/mongodb/api/useMPeople";
import MongoDBPage from "../../examples/mongodb/page";
import styles from "./styles/content.module.css";
import { useState } from "react";
import { EXAMPLELINKS } from "../../examples/config/exampleLinks";
import { Post } from "../../examples/mongodb/config/data";

export default function AccountClient({ owner }: { owner: string }) {
  const { data: session } = useSession();
  const { data: people = [] } = useMongopeople();
  const ownerData = people.find((p: Post) => p.ownerName === owner);
  const ownerImage = ownerData?.ownerImage ?? session?.user?.image ?? "";
  const isOwner = session?.user?.name === owner;
  const Comps: Record<string, React.ReactNode> = {
    MongoImages: <MongoDBPage isAccountPage={true} owner={owner} />,
    PostgreSimple: <div>2</div>,
    MySQLSmthng: <div>3</div>,
  };
  const [openBlock, setOpenBlock] = useState<number | null>(null);

  return (
    <div className={styles.mainBlock}>
      <div className={styles.ownerInfo}>
        {session && <img src={ownerImage} className={styles.ownerImg} />}

        <div className={styles.ownerText}>
          {isOwner ? (
            <>
              <h2>Hello owner {session?.user?.name}</h2>
              <p> Your activity in:</p>
            </>
          ) : (
            <>
              <h2>Ure checking activity of {owner}</h2>
              <p>Activity of {owner}</p>
            </>
          )}
        </div>
      </div>
      <ul className={styles.activityBLock}>
        {EXAMPLELINKS.filter((block) => !block.disabled).map((block, index) => (
          <li className={styles.activityItem} key={block.label}>
            <div
              className={styles.activityContainer}
              onClick={() => setOpenBlock(openBlock === index ? null : index)}>
              <p>{block.label} Activity</p>
              <div
                className={styles.testBlock}
                style={
                  openBlock === index
                    ? { top: "110px", opacity: "1", pointerEvents: "all" }
                    : { top: "0px", opacity: "0", pointerEvents: "none" }
                }>
                {Comps[block.forDB]}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
