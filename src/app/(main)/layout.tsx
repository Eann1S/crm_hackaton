"use client";

import { useSession } from "next-auth/react";
import DynamicSidebar from "../../components/sidebars/DynamicSidebar";
import { usePathname } from "next/navigation";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session } = useSession();
  const pathname = usePathname();
  if (!session) {
    return null;
  }
  return (
    <main className="w-screen h-screen flex flex-row gap-2">
      <DynamicSidebar role={session.user.role} pathname={pathname} />
      <div className="grow">{children}</div>
    </main>
  );
}
