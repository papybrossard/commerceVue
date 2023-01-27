import { ref } from "vue";
import { defineStore } from "pinia";
import type Item from "../Entity/Item";

export const itemStore = defineStore("item", () => {
  const items = ref<Array<Item>>([]);

  const addItem = (itemAdded: Item) => {
    items.value.push(itemAdded);
  };
  const getItems = (f: string) => {
    if (f) {
      return items.value.filter((item) => item.category === f);
    } else {
      return items.value;
    }
  };
  return { items, addItem, getItems };
});
