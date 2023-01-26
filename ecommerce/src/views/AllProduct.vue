<template>
  <ProductTable
    :products="products"
    @product-added="addProduct"
    @show-details="showDetails"
  />
  <DetailPage v-if="details" :product="selected" />
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
          for (let i = 0; i < json.length; i++) this.products.push(json[i]);
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
    aff() {
      console.log(this.products);
    }
  },
  created() {
    this.getProducts();
  },
  data() {
    return {
      products: [],
      cart: [],
      details: false,
      selected: {},
    };
  }
});
</script>
