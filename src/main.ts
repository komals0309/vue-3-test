import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { useAuthStore } from './stores/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');

// Load user from localStorage
const authStore = useAuthStore();
authStore.loadUserFromStorage();
