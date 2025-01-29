<script setup>
import ProductCard from "@/components/ProductCard.vue";
import { useProductsStore } from "@/stores/products";

const { products } = useProductsStore();
</script>

<template>
  <main class="md:py-3 md:px-4 p-0">
    <div class="grid grid-cols-12 gap-0 md:gap-x-4 md:gap-y-2">
      <ProductCard
        class="col-span-12 md:col-span-6 xl:col-span-3 lg:col-span-4"
        v-for="product in products"
        :product="product"
      />
    </div>
  </main>
</template>
