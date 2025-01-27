<template>
  <div class="p-4"></div>
</template>

<script>
export default {
  props: {
    name: String,
    code: String,
    price: Number,
    image: String,
    attributes: Object,
  },
  filters: {
    currency(value) {
      return `$${value.toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
/* Optional additional styling */
</style>
