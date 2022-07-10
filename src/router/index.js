import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Explore from "../views/Explore.vue";
import Ranking from "../views/Ranking.vue";
import Activity from "../views/Activity.vue";
import Create from "../views/Create.vue";
import Account from "../views/Account.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/explore-collections",
    name: "Explore",
    component: Explore
  },
  {
    path: "/rankings",
    name: "Ranking",
    component: Ranking
  },
  {
    path: "/activity",
    name: "Activity",
    component: Activity
  },
  {
    path: "/asset/create",
    name: "Create",
    component: Create
  },
  {
    path: "/account",
    name: "Account",
    component: Account
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;