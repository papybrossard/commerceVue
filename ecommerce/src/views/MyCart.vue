<template>
  <p>Bonjour</p>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PanierTable from "../components/PanierTable.vue";

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