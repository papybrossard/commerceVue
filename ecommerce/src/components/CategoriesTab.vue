<template>
  <ul class="nav nav-tabs">
    <li v-for="cat in categories" :key="cat.id" class="nav-item">
      <RouterLink class="nav-link" :to="'/Category/' + cat.getCategory()">
        {{ cat.getCategory() }}
      </RouterLink>
    </li>
  </ul>
  <RouterView />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Category from "@/Entity/Category";

export default defineComponent({
  name: "CategoriesTab",
  emits: ["productAdded", "showDetails"],
  methods: {
    addToCart(id: number): void {
      this.$emit("productAdded", id);
    },
    getCategories(): void {
      fetch("https://fakestoreapi.com/products/categories").then((res) =>
        res.json().then((json) => {
          for (let i = 0; i < json.length; i++)
            this.categories.push(new Category(i, json[i]));
        })
      );
    },
    getPath(cat: Category) {
      return "Category/" + cat.getCategory();
    },
  },
  created() {
    this.getCategories();
  },
  data() {
    return {
      categories: new Array<Category>(),
    };
  },
});
</script>
