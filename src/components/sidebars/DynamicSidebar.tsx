import Sidebar from "./Sidebar";
import { Role } from "../../utils/types";
import { ChatBubbleOvalLeftEllipsisIcon, Cog6ToothIcon, CubeIcon, ListBulletIcon, PlusCircleIcon, SquaresPlusIcon, UserCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function DynamicSidebar({
  role,
  pathname,
}: {
  role: string;
  pathname: string;
}) {
  const tabs = roleBasedTabs[role as Role] || roleBasedTabs.USER;

  return <Sidebar tabs={tabs} pathname={pathname} />;
}

export const roleBasedTabs = {
  'USER': [
    { label: "Мой профиль", path: "/profile", icon: <UserCircleIcon className="w-7" /> },
    { label: "Создание запроса", path: "/request", icon: <PlusCircleIcon className="w-7" /> },
    { label: "Чат с менеджером", path: "/chat", icon: <ChatBubbleOvalLeftEllipsisIcon className="w-7" /> },
  ],
  'MANAGER': [
    { label: "Мой профиль", path: "/profile", icon: <UserCircleIcon className="w-7" /> },
    { label: "Список клиентов", path: "/clients", icon: <UserGroupIcon className="w-7" /> },
    { label: "Управление проектами", path: "/management/projects", icon: <CubeIcon className="w-7" /> },
    { label: "Связь с клиентами", path: "/chat", icon: <ChatBubbleOvalLeftEllipsisIcon className="w-7" /> },
  ],
  'ADMIN': [
    { label: "Мой профиль", path: "/profile", icon: <UserCircleIcon className="w-7" /> },
    { label: "Управление клиентами", path: "/management/clients", icon: <Cog6ToothIcon className="w-7" /> },
    { label: "Регистрация менеджеров", path: "/manager-registration", icon: <SquaresPlusIcon className="w-7" /> },
    { label: "Управление менеджерами", path: "/management/managers", icon: <Cog6ToothIcon className="w-7" /> },
    { label: "Доступ к сводным отчётам", path: "/reports", icon: <ListBulletIcon className="w-7" /> },
  ],
};
export type Tab = { label: string; path: string, icon: any }
