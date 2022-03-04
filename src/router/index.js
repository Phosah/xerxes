import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ConnectWallet from "../views/ConnectWallet.vue";
import Account from "../views/Account.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/connectwallet",
      name: "Connect Wallet",
      component: ConnectWallet,
    },
    {
      path: "/account",
      name: "Account",
      component: Account,
    },
    {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
  ],
});

export default router;
