<template>
  <div class="row">
    <div
      v-for="item in itemStore.getItems($route.params.id)"
      :key="item.id"
      class="col-lg-4 mb-3 d-flex align-items-stretch card"
      style="width: 18rem"
    >
      <img :src="item.image" class="card-img-top imageGallery" />
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <span class="badge bg-secondary"> {{ item.category }}</span>
        <p>{{ item.price }}€</p>
        <button @click="addToCart(item)" class="btn btn-primary">
          Ajouter au panier
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type Item from "@/Entity/Item";
import { itemStore } from "../stores/item";
import { cartStore } from "@/stores/cart";

export default defineComponent({
  name: "ProductTable",
  emits: ["productAdded", "showDetails"],
  methods: {
    addToCart(item: Item): void {
      this.cartStore.addCartItem(item);
      console.log(this.cartStore.cartItems);
    },
  },
  data() {
    return {
      itemStore: itemStore(),
      cartStore: cartStore(),
    };
  },
});
</script>
<style>
.imageGallery {
  height: 18em;
  width: auto;
}
</style>
