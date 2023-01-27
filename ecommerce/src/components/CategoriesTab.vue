<template>
  <ul class="nav nav-tabs">
    <li v-for="cat in categories" :key="cat" class="nav-item">
      <RouterLink class="nav-link" :to="'/Category/' + cat">
        {{ cat }}
      </RouterLink>
    </li>
  </ul>
  <RouterView />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoriesTab",
  emits: ["productAdded", "showDetails"],
  methods: {
    addToCart(id: number): void {
      this.$emit("productAdded", id);
    },
    showDetails(id: number): void {
      this.$emit("showDetails", id);
    },
    getCategories(): void {
      fetch("https://fakestoreapi.com/products/categories").then((res) =>
        res.json().then((json) => {
          for (let i = 0; i < json.length; i++) this.categories.push(json[i]);
        })
      );
    },
    getPath(cat: string) {
      return "Category/" + cat;
    },
  },
  created() {
    this.getCategories();
  },
  data() {
    return {
      categories: new Array<String>(),
    };
  },
});
</script>
