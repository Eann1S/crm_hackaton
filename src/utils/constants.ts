import { Order } from "./types";

export const roleBasedTabs = {
  'USER': [
    { label: "Мой профиль", path: "/profile" },
    { label: "Создание запроса", path: "/request" },
    { label: "Чат с менеджером", path: "/chat" },
  ],
  'MANAGER': [
    { label: "Мой профиль", path: "/profile" },
    { label: "Список клиентов", path: "/clients" },
    { label: "Управление проектами", path: "/management/projects" },
    { label: "Связь с клиентами", path: "/chat" },
  ],
  'ADMIN': [
    { label: "Мой профиль", path: "/profile" },
    { label: "Управление клиентами", path: "/management/clients" },
    { label: "Регистрация менеджеров", path: "/manager-registration" },
    { label: "Управление менеджерами", path: "/management/managers" },
    { label: "Доступ к сводным отчётам", path: "/reports" },
  ],
};

export const Roles = {
  USER: 'USER',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN'
};

export const admin = {
  id: "admin_id",
  email: "admin@email.com",
  password: 'admin',
  role: Roles.ADMIN,
  firstname: "admin",
  lastname: "admin",
};
export const manager = {
  id: "manager_id",
  email: "manager@email.com",
  password: 'manager',
  role: Roles.MANAGER,
  firstname: "manager",
  lastname: "manager",
};
export const user = {
  id: "user_id",
  email: "user@email.com",
  password: 'user',
  role: Roles.USER,
  firstname: "user",
  lastname: "user",
};

export const orders: Order[] = [
  { number: 1, status: "pending" },
  { number: 2, status: "pending" },
  { number: 3, status: "success" },
  { number: 4, status: "success" },
  { number: 5, status: "cancel" },
];
