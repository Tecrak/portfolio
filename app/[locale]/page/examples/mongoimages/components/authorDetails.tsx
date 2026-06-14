"use client";
import { useLocale } from "next-intl";
import styles from "./styles/authorDetails.module.css";
import Link from "next/link";
export default function AuthorDetails({
  data,
  person,
}: {
  data: any;
  person: string;
}) {
  const locale = useLocale();

  return (
    <Link href={`/${locale}/page/account/${person}`}>
      <div className={styles.authorDetails}>
        <img src={data.ownerImage}></img>
        <p>{data.ownerName}</p>
      </div>
    </Link>
  );
}
