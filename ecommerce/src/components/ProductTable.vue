<template>
  <div class="row">
    <div
      v-for="(item, x) in itemStore.getItems($route.params.id)"
      :key="x"
      class="col-lg-4 mb-3 d-flex align-items-stretch card"
      style="width: 18rem"
    >
      <img :src="item.image" class="card-img-top imageGallery" />
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <span class="badge bg-secondary"> {{ item.category }}</span>
        <p>{{ item.price }}€</p>
        <button @click="cartStore.addCartItem(item)" class="btn btn-primary">
          Ajouter au panier
        </button>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Détails du produit
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { itemStore } from "../stores/item";
import { cartStore } from "@/stores/cart";
import DetailsPage from "@/components/DetailsPage.vue";

export default defineComponent({
  name: "ProductTable",
  component: {
    DetailsPage,
  },
  data() {
    return {
      itemStore: itemStore(),
      cartStore: cartStore(),
      modal: Boolean(false),
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
