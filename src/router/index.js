import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Explore from "../views/Explore.vue";
import Activity from "../views/Activity.vue";
import Create from "../views/Create.vue";
import Account from "../views/Account.vue";
import Login from "../views/Login.vue";
import Collection from "../views/Collection.vue";
import MyCollection from "../views/MyCollection.vue";
import CollectionDetail from "../views/CollectionDetail.vue";

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
  {
    path: "/collection/:name",
    name: "Collection",
    component: Collection
  },
  {
    path: "/collections",
    name: "MyCollection",
    component: MyCollection
  },
  {
    path: "/assets/ethereum/:address/:id",
    name: "CollectionDetail",
    component: CollectionDetail
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;