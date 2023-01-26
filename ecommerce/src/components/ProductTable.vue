<template>
  <table>
    <tr>
      <th>Nom du produit</th>
      <th>Prix</th>
      <th>Description</th>
      <th></th>
      <th></th>
    </tr>
    <tr v-for="product in products" :key="product.id">
      <td>{{ product.title }}</td>
      <td>{{ product.price }} €</td>
      <td>{{ product.description }}</td>
      <td><button @click="addToCart(product.id)">Ajouter au panier</button></td>
      <td><button @click="showDetails(product.id)">Détails</button></td>
    </tr>
  </table>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductTable",
  emits: ["productAdded", "showDetails"],
  props: ["products"],
  methods: {
    addToCart(id: number) {
      this.$emit("productAdded", id);
    },
    showDetails(id: number) {
      this.$emit("showDetails", id);
    },
  },
});
</script>
