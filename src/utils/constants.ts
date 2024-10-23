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
