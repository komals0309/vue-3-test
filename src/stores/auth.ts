import { defineStore } from 'pinia';

interface AuthState {
  user: { phoneNumber: string; name: string } | null;
  otp: string;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    otp: '',
  }),
  actions: {
    async login(phoneNumber: string, otp: string) {
      // Simulate OTP validation
      if (otp === '123456') { 
        this.user = { phoneNumber, name: 'Komal Saini' }; 
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        throw new Error('Invalid OTP');
      }
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
