import { OrderType } from "./types";

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

export const orders: OrderType[] = [
  { id: 1, status: "pending" },
  { id: 2, status: "pending" },
  { id: 3, status: "success" },
  { id: 4, status: "success" },
  { id: 5, status: "cancel" },
];
