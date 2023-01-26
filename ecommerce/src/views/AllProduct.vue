<template>
    <p>AllProduct view - components to add</p>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["showLogin"],
  name: "AllProduct",
  components: {
  },
  methods: {
    getProducts() {
      return 1;
    }
  },
  data() {
    return {
      user: "",
      }
    }
  }
);
</script>
