export type Role = 'USER' | 'MANAGER' | 'ADMIN';

export type Order = {
  number: number;
  status: Status;
};

export type Status = 'success' | 'pending' | 'cancel';
