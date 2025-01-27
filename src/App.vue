<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <RouterView class="bg-[#F8F9FB]" />
</template>
