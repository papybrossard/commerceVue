<template>
  <div
    v-for="product in products"
    :key="product.id"
    class="card"
    style="width: 18rem"
  >
    <img :src="product.image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">
        {{ product.description }}
      </p>
      <a href="#" class="btn btn-primary">Ajouter au Panier</a>
      <a href="#" class="btn btn-primary">Détails Produits</a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductTable",
  emits: ["productAdded", "showDetails"],
  props: ["products"],
  methods: {
    addToCart(product: object) {
      this.$emit("productAdded", product);
    },
    showDetails(product: object) {
      this.$emit("showDetails", product);
    },
  },
});
</script>
