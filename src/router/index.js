import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Pricing from '../views/Pricing.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
