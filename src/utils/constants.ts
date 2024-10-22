export const roleBasedTabs = {
  'client': [
    { label: "Мой профиль", path: "/profile/client" },
    { label: "Создание запроса", path: "/request" },
    { label: "Чат с менеджером", path: "/chat" },
  ],
  'manager': [
    { label: "Мой профиль", path: "/profile/manager" },
    { label: "Список клиентов", path: "/clients" },
    { label: "Управление проектами", path: "/management/projects" },
    { label: "Связь с клиентами", path: "/chat" },
  ],
  'admin': [
    { label: "Мой профиль", path: "/profile/admin" },
    { label: "Управление клиентами", path: "/management/clients" },
    { label: "Регистрация менеджеров", path: "/manager-registration" },
    { label: "Управление менеджерами", path: "/management/managers" },
    { label: "Доступ к сводным отчётам", path: "/reports" },
  ],
};
