export type Role = 'USER' | 'MANAGER' | 'ADMIN';

export type OrderType = {
  id: number;
  status: Status;
};

export type Status = 'success' | 'pending' | 'cancel';
