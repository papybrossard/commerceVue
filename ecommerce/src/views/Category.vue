<template>
  <p>Category view - components to add</p>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["showLogin"],
  name: "CategoryView",
  components: {
  },
  methods: {
  },
  data() {
    return {
      user: "",
    }
  }
});
</script>
