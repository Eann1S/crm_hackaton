"use client";

import { useSession } from "next-auth/react";
import DynamicSidebar from "../../components/sidebars/DynamicSidebar";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session } = useSession();
  if (!session) {
    return null;
  }
  return (
    <main className="w-screen h-screen flex flex-row gap-2">
      <DynamicSidebar role={session.user.role} />
      <div className="grow">{children}</div>
    </main>
  );
}
