import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ConnectWallet from "../views/ConnectWallet.vue";
import Account from "../views/Account.vue";
import BorrowMarket from "../views/BorrowMarket.vue";
import SupplyMarket from "../views/SupplyMarket.vue";
import SelectedAssets from "../views/SelectedAssets.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
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
      path: "/borrowmarket",
      name: "Borrow Market",
      component: BorrowMarket,
    },
    {
      path: "/supplymarket",
      name: "Supply Market",
      component: SupplyMarket,
    },
    {
      path: "/selectedassets",
      name: "Selected Assets",
      component: SelectedAssets,
    },
  ],
});

export default router;
