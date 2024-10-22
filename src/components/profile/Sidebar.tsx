"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { roleBasedTabs } from "../../utils/constants";
import {clsx} from 'clsx';

export default function Sidebar() {
  const pathname = usePathname();
  const uri = pathname.split("/");
  const role = uri[uri.length - 1];
  const key = Object.keys(roleBasedTabs).indexOf(role);
  const tabs = Object.values(roleBasedTabs)[key];
  

  return (
    <div className="w-[400px] flex-none flex flex-col justify-between py-8">
      <div className="w-full flex flex-col justify-center px-10 gap-8">
        <div className="font-bold text-6xl px-4">MVP</div>
        <ul className="menu menu-lg w-full gap-8">
          {tabs.map((tab) => (
            <li key={tab.label}>
              <Link className={clsx('shadow', pathname === tab.path && 'active')} href={tab.path}>
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row justify-center">
        <button className="btn btn-neutral px-8 text-xl font-medium">
          Выйти
        </button>
      </div>
    </div>
  );
}
