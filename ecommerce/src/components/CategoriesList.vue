<template>
  <ProductTable :product="products" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ProductTable from "./ProductTable.vue";

export default defineComponent({
  name: "CategoriesList",
  emits: ["productAdded", "showDetails"],
  components: {
    ProductTable,
  },
  methods: {
    addToCart(id: number) {
      this.$emit("productAdded", id);
    },
    showDetails(id: number) {
      this.$emit("showDetails", id);
    },
    getSpecificCategories() {
      let url =
        "https://fakestoreapi.com/products/category/" + this.$route.params.id;
      fetch(url).then((res) =>
        res.json().then((json) => {
          for (let i = 0; i < json.length; i++) this.products.push(json[i]);
        })
      );
    },
  },
  updated(): void {
    this.getSpecificCategories();
  },
  data() {
    return {
      products: new Array<String>(),
    };
  },
});
</script>
