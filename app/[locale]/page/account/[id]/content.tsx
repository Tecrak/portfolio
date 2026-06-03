"use client";

import { useSession } from "next-auth/react";
import { useMongopeople } from "../../examples/mongodb/api/useMPeople";
import MongoDBPage from "../../examples/mongodb/page";
import styles from "./styles/content.module.css";

export default function AccountClient({ owner }: { owner: string }) {
  const { data: session } = useSession();
  const isOwner = session?.user?.name === owner;

  return (
    <div className={styles.mainBlock}>
      <ul className={styles.activityBLock}>
        <li className={styles.activityItem}>
          <div className={styles.activityContainer}>
            <p>PostgreSQL Activity</p>
            <div className={styles.testBlock}></div>
          </div>
        </li>
        <li className={styles.activityItem}>
          <div className={styles.activityContainer}>
            <p>MongoDB Activity</p>
            <div className={styles.testBlock}></div>
          </div>
        </li>
        <li className={styles.activityItem}>
          <div className={styles.activityContainer}>
            <p>MySQL Activity</p>
            <div className={styles.testBlock}></div>
          </div>
        </li>
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
