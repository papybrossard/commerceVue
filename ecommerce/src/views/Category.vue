<template>
  <CategoriesList :categories="categories" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CategoriesList from "../components/CategoriesList.vue";

export default defineComponent({
  name: "AllProduct",
  components: {
    CategoriesList,
  },
  methods: {
    getCategories() {
      fetch("https://fakestoreapi.com/products/categories").then((res) =>
        res.json().then((json) => {
          for (let i = 0; i < json.length; i++) this.categories.push(json[i]);
        })
      );
    },
    addProduct(product: object) {
      this.cart.push(product);
    },
    showDetails(selProduct: object) {
      this.selected = selProduct;
      this.details = true;
    },
  },
  created() {
    this.getCategories();
    console.log(this.categories);
  },
  data() {
    return {
      categories: [],
      cart: [],
      details: false,
      selected: {},
    };
  }
});
</script>
