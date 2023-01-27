import { createRouter, createWebHistory } from "vue-router";
import AllProduct from "../views/AllProduct.vue";
import Category from "../views/CategoryProduct.vue";
import MyCart from "../views/MyCart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "AllProduct",
      component: AllProduct,
    },
    {
      path: "/Category/",
      name: "Category",
      component: Category,
    },
    {
      path: "/MyCart",
      name: "MyCart",
      component: MyCart,
    },
    {
      path: "/Category/:id",
      name: "personnalize",
      component: Category,
    },
  ],
});

export default router;
