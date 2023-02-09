<template>
  <CartTable />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CartTable from "../components/CartTable.vue";

export default defineComponent({
  emits: ["showLogin"],
  name: "MyCart",
  components: {
    CartTable,
  },
  methods: {},
  data() {
    return {
      user: "",
    };
  },
});
</script>
