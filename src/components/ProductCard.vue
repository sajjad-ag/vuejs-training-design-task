<template>
  <div
    :class="
      cn(
        'p-4 flex justify-between border-2 border-gray-200  bg-white',
        product.class
      )
    "
  >
    <div>
      <div class="flex items-center gap-2">
        <button class="cursor-pointer" @click="markFavorite(product)">
          <Star
            class="w-4 h-4 hover:fill-amber-300 hover:text-amber-300"
            :class="
              product.favorite
                ? 'text-amber-300 fill-amber-300'
                : 'text-gray-200'
            "
          />
        </button>
        <span class="font-bold">
          {{ product.name }}
        </span>
      </div>
      <p>{{ product.code }}</p>
      <div v-if="product.attributes" class="flex gap-2">
        <span
          v-if="product.attributes.legs"
          :key="key"
          :class="
            cn(
              'px-2 rounded-full font-semibold text-sm',
              product.attributes.legs.color_code
            )
          "
        >
          Legs: {{ product.attributes.legs.text }}
        </span>
        <span
          v-if="product.attributes.color"
          :key="key"
          :class="
            cn(
              'px-2 rounded-full font-semibold text-sm',
              product.attributes.color.color_code
            )
          "
        >
          Color: {{ product.attributes.color.text }}
        </span>
      </div>
      <p>Price: {{ product.price }}</p>
    </div>
    <div>
      <img
        v-if="product.image"
        :src="product.image"
        alt="Product Image"
        class="w-16 h-16 bg-gray-200"
      />
      <CameraOff class="w-16 h-16 text-gray-200" v-else />
    </div>
  </div>
</template>

<script setup>
import { cn } from "@/lib/utils";
import { useProductsStore } from "@/stores/products";
import { CameraOff, Star } from "lucide-vue-next";
import { BiCameraFill } from "oh-vue-icons/icons";
import { CoStar } from "oh-vue-icons/icons";
const props = defineProps({
  product: Object,
});

const { markFavorite } = useProductsStore();
</script>
