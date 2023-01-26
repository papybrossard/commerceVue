import { createRouter, createWebHistory } from "vue-router";
import AllProduct from "../views/AllProduct.vue";
import Category from "../views/Category.vue";
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
      path: "/Category",
      name: "Category",
      component: Category,
    },
    {
      path: "/MyCart",
      name: "MyCart",
      component: MyCart,
    },
  ],
});

export default router;
