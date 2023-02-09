import { defineStore } from "pinia";
import { ref } from "vue";
import type Item from "../Entity/Item";

export const cartStore = defineStore("cart", () => {
  const cartItems = ref<Array<Item>>([]);

  const addCartItem = (itemAdded: Item) => {
    let idx = -1;

    idx = cartItems.value.findIndex((t) => t.id === itemAdded.id);

    if (idx > -1) {
      cartItems.value[idx].quantity++;
    } else {
      cartItems.value.push(itemAdded);
    }
  };
  const getCartItems = () => {
    return cartItems.value;
  };

  const deleteItem = (itemDeleted: Item) => {
    const index = cartItems.value.findIndex((t) => t.id === itemDeleted.id);

    if (index != -1) {
      cartItems.value.splice(index, 1);
    }
  };

  const deleteAllItems = () => {
    cartItems.value.forEach((item, i) => {
      cartItems.value.splice(i);
    });
  };

  const getTotalCart = () => {
    if (cartItems.value.length) {
      return cartItems.value
        .map((item) => item.price * item.quantity)
        .reduce((a, b) => a + b);
    } else {
      return 0;
    }
  };
  return {
    cartItems,
    addCartItem,
    getCartItems,
    deleteItem,
    deleteAllItems,
    getTotalCart,
  };
});
