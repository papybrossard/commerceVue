<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <header>
    <h1>Site Ecommerce</h1>
    <div class="wrapper">
      <nav>
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
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
