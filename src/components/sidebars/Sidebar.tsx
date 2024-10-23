import Link from "next/link";
import { clsx } from "clsx";
import { signOut } from "next-auth/react";

export default function Sidebar({
  tabs,
  pathname,
}: {
  tabs: {
    label: string;
    path: string;
  }[];
  pathname: string;
}) {
  return (
    <div className="w-[400px] flex-none flex flex-col justify-between py-8">
      <div className="w-full flex flex-col justify-center px-10 gap-8">
        <div className="font-bold text-6xl px-4">MVP</div>
        <ul className="menu menu-lg w-full gap-8">
          {tabs.map((tab) => (
            <li key={tab.label}>
              <Link
                className={clsx("shadow", tab.path === pathname && "active")}
                href={tab.path}
              >
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row justify-center">
        <button
          onClick={() => signOut()}
          className="btn btn-neutral px-8 text-xl font-medium"
        >
          Выйти
        </button>
      </div>
    </div>
  );
}
