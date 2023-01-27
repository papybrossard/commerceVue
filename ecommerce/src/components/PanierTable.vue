<template>
  <div class="row" id="page">
    <div class="row text-center mt-3 mb-3">
      <h2>Récapitulatif commande</h2>
    </div>
    <ul v-if="cartStore.cartItems.length" class="list-group col-md-8">
      <li v-for="item in cartStore.cartItems" :key="item.id" id="product">
        <div class="row mt-2 ms-5" id="rowProduct">
          <div class="col-md-2" style="box-shadow: 3px 3px 3px lightgray">
            <img :src="item.image" width="80" height="80" />
          </div>
          <div class="col-md-4">
            <span
              ><strong>{{ item.title }} </strong> {{ item.category }}<br />
              <br />
              {{ item.price }} €</span
            >
          </div>
          <div class="col-md-2">
            <input
              type="number"
              step="1"
              min="1"
              max="20"
              name="quantity"
              title="Qty"
              class="input-text qty text"
              size="2"
              pattern=""
            />
          </div>
          <div class="col-md-2"></div>
          <div class="col-md-1">
            <span>{{ item.price }} €</span>
          </div>
          <div class="col-md-1">
            <button class="btn" @click="cartStore.deleteItems()">
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </li>
    </ul>
    <di class="col-md-1"></di>
    <ul class="list-group col-md-3 mt-2">
      <div class="row" id="panier">
        <li id="panierList" class="mt-1">
          <span
            ><strong>Coût total du panier :</strong> {{ totalPanier }} €
          </span>
        </li>
        <li id="montantList" class="mt-4 mb-2 text-center">
          <button @click="deleteAllProducts()" class="btn btn-success">
            Vider le panier
          </button>
        </li>
      </div>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { cartStore } from "@/stores/cart";

export default defineComponent({
  name: "PanierTable",
  /* methode dans store, cart.ts*/
  computed: {
    totalPanier() {
      let total = 0;
      this.cartStore.cartItems.forEach((item) => {
        total = total + item.price;
      });
      return total;
    },
  },
  data() {
    return {
    };
  },
});
</script>
<style scoped>
#rowProduct {
  box-shadow: 5px 5px 5px lightgray;
  background-color: white;
}

#panier {
  background-color: white;
}

#product,
#panierList,
#montantList {
  list-style-type: none;
}
</style>
