<template>
  <CategoriesTab />
  <CategoriesList />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CategoriesTab from "../components/CategoriesTab.vue";
import CategoriesList from "../components/CategoriesList.vue";

export default defineComponent({
  name: "CategoryProduct",
  components: {
    CategoriesTab,
    CategoriesList,
  },
});
</script>
