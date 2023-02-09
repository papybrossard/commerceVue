<template>
  <p>{{ item.category }}</p>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DetailsPage",
  props: ["item"],
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
