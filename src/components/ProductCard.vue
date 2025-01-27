<template>
  <div
    :class="
      cn(
        'p-4 flex justify-between border border-gray-200 bg-white',
        props.class
      )
    "
  >
    <div>
      <span class="font-bold flex items-center gap-2">
        <Star class="w-4 h-4 text-gray-200" />
        {{ props.name }}
      </span>
      <p>{{ props.code }}</p>
      <p>Price: {{ props.price }}</p>
    </div>
    <div>
      <img
        v-if="props.image"
        :src="props.image"
        alt="Product Image"
        class="w-16 h-16 bg-gray-200"
      />
      <CameraOff class="w-16 h-16 text-gray-200" v-else />
    </div>
  </div>
</template>

<script setup>
import { cn } from "@/lib/utils";
import { CameraOff, Star } from "lucide-vue-next";
import { BiCameraFill } from "oh-vue-icons/icons";
import { CoStar } from "oh-vue-icons/icons";
const props = defineProps({
  name: String,
  code: String,
  price: Number,
  image: String,
  attributes: Object,
  class: String,
});
</script>

<style scoped>
/* Optional additional styling */
</style>
