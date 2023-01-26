<template>
  <ProductTable :products="products" @product-added="addProduct(product)" />
  <DetailPage />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ProductTable from "../components/ProductTable.vue";
import DetailPage from "../components/DetailsPage.vue";

export default defineComponent({
  name: "AllProduct",
  components: {
    ProductTable,
    DetailPage,
  },
  methods: {
    getProducts() {
      fetch("https://fakestoreapi.com/products").then((res) =>
        res.json().then((json) => {
          for (let i = 0; i < json.length; i++) this.products[i] = json[i];
        })
      );
    },
    addProduct(product: Object) {
      this.cart.push(product);
    }
  },
  created() {
    this.getProducts();
  },
  data() {
    return {
      products: [],
      cart: [],
    };
  }
});
</script>
