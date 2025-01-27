<template>
  <div
    :class="
      cn(
        'p-4 flex justify-between border-2 border-gray-200  bg-white',
        props.class
      )
    "
  >
    <div>
      <div class="flex items-center gap-2">
        <button class="cursor-pointer">
          <Star class="w-4 h-4 text-gray-200" />
        </button>
        <span class="font-bold">
          {{ props.name }}
        </span>
      </div>
      <p>{{ props.code }}</p>
      <div v-if="props.attributes" class="flex gap-2">
        <span
          v-if="props.attributes.legs"
          :key="key"
          :class="
            cn(
              'px-2 rounded-full font-semibold text-sm',
              props.attributes.legs.color_code
            )
          "
        >
          Legs: {{ props.attributes.legs.text }}
        </span>
        <span
          v-if="props.attributes.color"
          :key="key"
          :class="
            cn(
              'px-2 rounded-full font-semibold text-sm',
              props.attributes.color.color_code
            )
          "
        >
          Color: {{ props.attributes.color.text }}
        </span>
      </div>
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
