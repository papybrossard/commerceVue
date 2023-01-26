<template>
  <p>Page de détails</p>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductTable",
  emits: ["productAdded", "showDetails"],
  props: ["product"],
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
