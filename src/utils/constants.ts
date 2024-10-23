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

export const Role = {
  USER: 'USER',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN'
};

export const admin = {
  id: "admin_id",
  email: "admin@email.com",
  password: 'admin',
  role: Role.ADMIN,
  firstname: "admin",
  lastname: "admin",
};
export const manager = {
  id: "manager_id",
  email: "manager@email.com",
  password: 'manager',
  role: Role.MANAGER,
  firstname: "manager",
  lastname: "manager",
};
export const user = {
  id: "user_id",
  email: "user@email.com",
  password: 'user',
  role: Role.USER,
  firstname: "user",
  lastname: "user",
};

export const orders = [
  { number: 1, status: "pending" },
  { number: 2, status: "pending" },
  { number: 3, status: "success" },
  { number: 4, status: "success" },
  { number: 5, status: "cancel" },
];
