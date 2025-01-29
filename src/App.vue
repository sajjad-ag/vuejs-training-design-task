<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <header class="sticky top-0 z-10 bg-white md:border-b md:border-[#d8dadd]">
    <Navbar />
  </header>
  <RouterView class="bg-[#f9fafb]" />
</template>
