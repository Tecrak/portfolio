"use client";
import { useSession } from "next-auth/react";

export default function AccountPage() {
  const { data: session } = useSession();
  return (
    <div>
      <p>Hi {session?.user?.name}</p>
    </div>
  );
}
