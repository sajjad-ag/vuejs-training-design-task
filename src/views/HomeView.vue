<script setup>
import ProductCard from "@/components/ProductCard.vue";
import { useProductsStore } from "@/stores/products";

const { products } = useProductsStore();
</script>

<template>
  <main class="p-4">
    <div class="grid grid-cols-12 gap-x-4 gap-y-2">
      <ProductCard
        class="col-span-12 md:col-span-6 lg:col-span-3"
        v-for="product in products"
        :product="product"
      />
    </div>
  </main>
</template>
