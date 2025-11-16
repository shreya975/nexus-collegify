import { create } from 'zustand';

export type UserRole = 'manager' | 'admin' | 'teacher' | 'student';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  departmentId?: string;
  departmentName?: string;
}

interface UserState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: true }),
  setToken: (token) => set({ token }),
  login: (user, token) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    set({ user, token, isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    set({ user: null, token: null, isAuthenticated: false });
  },
}));

// Initialize from localStorage
const storedUser = localStorage.getItem('user');
const storedToken = localStorage.getItem('token');
if (storedUser && storedToken) {
  try {
    const user = JSON.parse(storedUser);
    useUserStore.setState({ user, token: storedToken, isAuthenticated: true });
  } catch (error) {
    console.error('Failed to parse stored user:', error);
  }
}
