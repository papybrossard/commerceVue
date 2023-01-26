<template>
    <p>MyCart view - components to add</p>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["showLogin"],
  name: "MyCart",
  components: {
  },
  methods: {
  },
  data() {
    return {
      user: "",
      }
    }
  }
);
</script>
