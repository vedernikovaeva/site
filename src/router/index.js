import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Groups from '../views/Groups.vue';
import Songs from '../views/Songs.vue';
import Albums from '../views/Albums.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') },
  { path: '/groups', name: 'groups', component: Groups },
  { path: '/songs', name: 'songs', component: Songs },
  { path: '/albums', name: 'albums', component: Albums },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router;
