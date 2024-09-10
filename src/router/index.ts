import { createRouter, createWebHistory } from 'vue-router';
import FeedPage from '../views/FeedPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import CreatePostPage from '../views/CreatePostPage.vue';
import LoginPage from '../views/LoginPage.vue'; // Import the LoginPage component

const routes = [
  { path: '/', component: ProfilePage },
  { path: '/feed', component: FeedPage },
  { path: '/create-post', component: CreatePostPage },
  { path: '/login', component: LoginPage }, // Add route for LoginPage
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
