<template>
  <div
    v-for="category in categories"
    :key="category.id"
    class="card"
    style="width: 18rem"
  >
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ category }}</h5>
      <a href="#" class="btn btn-primary">Voir les Articles</a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoriesList",
  emits: ["productAdded", "showDetails"],
  props: ["categories"],
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
