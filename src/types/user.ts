export interface User {
  name: string | null;
  email: string;
  phone: string;
  address: string | null;
  token?: string;
}
