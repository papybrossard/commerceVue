<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <row>
    <header>
      <h1>Site Ecommerce</h1>

      <div class="wrapper">
        <nav>
          <RouterLink to="/">Produits</RouterLink>
          <RouterLink to="/Category">Catégorie</RouterLink>
          <RouterLink to="/MyCart">Mon Panier</RouterLink>
        </nav>
      </div>
    </header>
  </row>
  <RouterView />
</template>
<style scoped>

</style>
