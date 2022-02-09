import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/local_multiplayer',
    name: 'LocalMultiplayer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LocalMultiplayer.vue'),
  },
  {
    path: '/multiplayer',
    name: 'Multiplayer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Multiplayer.vue'),
  },
  {
    path: '/deck',
    name: 'Deck',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Deck.vue'),
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
