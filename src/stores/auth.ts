import { defineStore } from 'pinia';

interface AuthState {
  user: { email: string; phoneNumber?: string; name?: string } | null;
  otp: string;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    otp: '',
  }),
  actions: {
    setUser(email: string) {
      this.user = { email };
      localStorage.setItem('user', JSON.stringify(this.user));
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
    },
    loadUserFromStorage() {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
      }
    },
  },
});
