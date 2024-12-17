import { create } from 'zustand';
import { User } from '@/types/user.ts';
import { getUser, updateUser } from '@/services/userService.ts';
import { login, logout, signup } from '@/services/authServices.ts';
import { Credentials } from '@/types/auth.ts';

interface UserState {
  user: User | null;
  getUser: () => Promise<void>;
  login: (credentials: Credentials) => Promise<void>;
  signup: (credentials: Credentials) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (user: Partial<User>) => Promise<void>;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  getUser: async () => {
    const response = await getUser();
    set({ user: response });
  },
  login: async (credentials: Credentials) => {
    const user = await login(credentials);
    set({ user });
  },
  signup: async (credentials: Credentials) => {
    const user = await signup(credentials);
    set({ user });
  },
  logout: async () => {
    await logout();
    set({ user: null });
  },
  updateUser: async (userData: Partial<User>) => {
    const response = await updateUser(userData);
    set({ user: response });
  }
}));
