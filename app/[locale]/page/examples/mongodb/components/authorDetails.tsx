"use client";
import { useLocale } from "next-intl";
import styles from "./styles/authorDetails.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
export default function AuthorDetails({
  data,
  person,
}: {
  data: any;
  person: string;
}) {
  const locale = useLocale();
  const { data: session } = useSession();

  return (
    <Link href={`/${locale}/page/account/${person}`}>
      <div className={styles.authorDetails}>
        <img src={data.ownerImage}></img>
        <p>{data.ownerName}</p>
      </div>
    </Link>
  );
}
