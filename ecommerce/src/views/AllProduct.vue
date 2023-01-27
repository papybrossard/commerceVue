<template>
  <ProductTable />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ProductTable from "@/components/ProductTable.vue";
import { itemStore } from "../stores/item";
import Item from "../Entity/Item";

export default defineComponent({
  name: "AllProduct",
  components: {
    ProductTable,
  },
  methods: {
    getProducts() {
      fetch("https://fakestoreapi.com/products").then((res) =>
        res.json().then((json: Array<object>) => {
          for (let i = 0; i < json.length; i++) {
            this.itemStore.addItem(
              new Item(
                json[i].id,
                json[i].price,
                json[i].title,
                json[i].category,
                json[i].image
              )
            );
          }
        })
      );
    },
  },
  created() {
    this.getProducts();
  },
  data() {
    return {
      itemStore: itemStore(),
    };
  },
});
</script>
