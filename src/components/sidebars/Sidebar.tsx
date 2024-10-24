import Link from "next/link";
import { clsx } from "clsx";
import { signOut } from "next-auth/react";
import { Tab } from "./DynamicSidebar";

export default function Sidebar({
  tabs,
  pathname,
}: {
  tabs: Tab[];
  pathname: string;
}) {
  return (
    <div className="w-[400px] flex-none flex flex-col justify-between py-8 shadow">
      <SidebarMenu tabs={tabs} pathname={pathname} />
      <SidebarFooter />
    </div>
  );
}

function SidebarMenu({
  tabs,
  pathname,
}: {
  tabs: Tab[];
  pathname: string;
}) {
  return (
    <div className="w-full flex flex-col justify-center px-10 gap-8">
      <SidebarHeader />
      <ul className="menu menu-lg w-full gap-8">
        {tabs.map((tab) => (
          <SidebarItem key={tab.label} tab={tab} pathname={pathname} />
        ))}
      </ul>
    </div>
  );
}

function SidebarHeader() {
  return <div className="font-bold text-6xl px-4">MVP</div>;
}

function SidebarItem({
  tab,
  pathname,
}: {
  tab: Tab;
  pathname: string;
}) {
  const isActive = pathname === tab.path;
  return (
    <li>
      <Link className={clsx("shadow", isActive && "active")} href={tab.path}>
        {tab.icon}
        {tab.label}
      </Link>
    </li>
  );
}

function SidebarFooter() {
  return (
    <div className="flex flex-row justify-center">
      <button
        onClick={() => signOut()}
        className="btn btn-neutral px-8 text-xl font-medium"
      >
        Выйти
      </button>
    </div>
  );
}

