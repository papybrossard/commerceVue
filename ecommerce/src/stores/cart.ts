import { defineStore } from "pinia";
import { ref } from "vue";
import type Item from "../Entity/Item";

export const cartStore = defineStore("cart", () => {
  const cartItems = ref<Array<Item>>([]);

  const addCartItem = (itemAdded: Item) => {
    const idxIntem = cartItems.value.findIndex((t) => {
      t.id = itemAdded.id;
    });
    if (idxIntem != -1) {
      cartItems.value[idxIntem].quantity++;
      console.log(cartItems.value[idxIntem]);
    } else {
      cartItems.value.push(itemAdded);
      console.log(idxIntem);
    }
  };
  const getCartItems = () => {
    return cartItems.value;
  };

  const deleteItems = (itemDeleted: Item) => {
    const idx = cartItems.value.findIndex((t) => t.id === itemDeleted.id);
    if (idx != -1) {
      cartItems.value.slice(idx);
    }
  };

  const deleteAllItems = () => {
    cartItems.value.forEach((item, i) => {
      cartItems.value.splice(i);
    });
  };
  return { cartItems, addCartItem, getCartItems, deleteItems, deleteAllItems  };
});
