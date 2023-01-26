<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="headerSite">
    <h1>Site Ecommerce</h1>
    <div class="wrapper">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Produits</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/Category">Catégorie</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/MyCart">Mon Panier</RouterLink>
        </li>
      </ul>
    </div>
  </header>
  <RouterView />
</template>
<style scoped>
.headerSite {
  display: block;
}
</style>
