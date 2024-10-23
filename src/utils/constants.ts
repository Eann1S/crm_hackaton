import { Order } from "./types";

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
