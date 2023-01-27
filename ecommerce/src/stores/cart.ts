import { defineStore } from "pinia";
import { ref } from "vue";
import type Item from "../Entity/Item";

export const cartStore = defineStore("cart", () => {
  const cartItems = ref<Array<Item>>([]);

  const addCartItem = (itemAdded: Item) => {
    cartItems.value.push(itemAdded);
  };
  const getCartItems = () => {
    return cartItems.value;
  };
  return { cartItems, addCartItem, getCartItems };
});
